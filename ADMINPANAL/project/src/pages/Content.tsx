import React, { useState } from 'react';
import { Plus, Edit, Trash2, FileText, Award, Briefcase, Play, Code, Wrench, MessageCircle, Upload, X, Image as ImageIcon } from 'lucide-react';
import Button from '../components/Common/Button';
import Modal from '../components/Common/Modal';
import Table from '../components/Common/Table';
import { 
  mockAchievements, 
  mockServices, 
  mockVideos, 
  mockSkills, 
  mockTools, 
  mockTestimonials,
  Achievement,
  Service,
  Video,
  Skill,
  Tool,
  Testimonial
} from '../data/mockData';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  currentImage?: string;
  onImageRemove?: () => void;
}

function ImageUpload({ onImageSelect, currentImage, onImageRemove }: ImageUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-300 mb-2">Image</label>
      
      {currentImage ? (
        <div className="relative inline-block">
          <img 
            src={currentImage} 
            alt="Preview" 
            className="w-32 h-32 object-cover rounded-lg border border-gray-600"
          />
          {onImageRemove && (
            <button
              type="button"
              onClick={onImageRemove}
              className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-500 transition-colors">
          <ImageIcon className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400 mb-2">Click to upload image</p>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      )}
      
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg cursor-pointer transition-colors"
      >
        <Upload className="w-4 h-4 mr-2" />
        {currentImage ? 'Change Image' : 'Upload Image'}
      </label>
    </div>
  );
}

type ContentType = 'achievements' | 'services' | 'videos' | 'skills' | 'tools' | 'testimonials';

export default function Content() {
  const [activeTab, setActiveTab] = useState<ContentType>('achievements');
  const [achievements, setAchievements] = useState<Achievement[]>(mockAchievements);
  const [services, setServices] = useState<Service[]>(mockServices);
  const [videos, setVideos] = useState<Video[]>(mockVideos);
  const [skills, setSkills] = useState<Skill[]>(mockSkills);
  const [tools, setTools] = useState<Tool[]>(mockTools);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(mockTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const tabs = [
    { id: 'achievements', name: 'Achievements', icon: Award },
    { id: 'services', name: 'Services', icon: Briefcase },
    { id: 'videos', name: 'Videos', icon: Play },
    { id: 'skills', name: 'Skills', icon: Code },
    { id: 'tools', name: 'Tools', icon: Wrench },
    { id: 'testimonials', name: 'Testimonials', icon: MessageCircle },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'achievements': return achievements;
      case 'services': return services;
      case 'videos': return videos;
      case 'skills': return skills;
      case 'tools': return tools;
      case 'testimonials': return testimonials;
      default: return [];
    }
  };

  const getColumns = () => {
    switch (activeTab) {
      case 'achievements':
        return [
          { key: 'title', header: 'Title' },
          { key: 'category', header: 'Category' },
          { key: 'date', header: 'Date', render: (value: string) => new Date(value).toLocaleDateString() },
          { key: 'actions', header: 'Actions', render: (value: any, row: any) => renderActions(row) },
        ];
      case 'services':
        return [
          { key: 'title', header: 'Service' },
          { key: 'category', header: 'Category' },
          { key: 'price', header: 'Price' },
          { 
            key: 'status', 
            header: 'Status',
            render: (value: string) => (
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {value}
              </span>
            )
          },
          { key: 'actions', header: 'Actions', render: (value: any, row: any) => renderActions(row) },
        ];
      case 'videos':
        return [
          { 
            key: 'thumbnail', 
            header: 'Video',
            render: (value: string, row: Video) => (
              <div className="flex items-center space-x-3">
                <img src={value} alt={row.title} className="w-16 h-10 object-cover rounded" />
                <div>
                  <p className="font-medium">{row.title}</p>
                  <p className="text-sm text-gray-500">{row.views} views</p>
                </div>
              </div>
            )
          },
          { key: 'createdAt', header: 'Created', render: (value: string) => new Date(value).toLocaleDateString() },
          { key: 'actions', header: 'Actions', render: (value: any, row: any) => renderActions(row) },
        ];
      case 'skills':
        return [
          { key: 'name', header: 'Skill' },
          { key: 'category', header: 'Category' },
          { 
            key: 'percentage', 
            header: 'Proficiency',
            render: (value: number) => (
              <div className="flex items-center space-x-2">
                <div className="w-16 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className="text-sm">{value}%</span>
              </div>
            )
          },
          { key: 'actions', header: 'Actions', render: (value: any, row: any) => renderActions(row) },
        ];
      case 'tools':
        return [
          { key: 'name', header: 'Tool' },
          { key: 'category', header: 'Category' },
          { key: 'actions', header: 'Actions', render: (value: any, row: any) => renderActions(row) },
        ];
      case 'testimonials':
        return [
          { 
            key: 'avatar', 
            header: 'Client',
            render: (value: string, row: Testimonial) => (
              <div className="flex items-center space-x-3">
                <img src={value} alt={row.clientName} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-medium">{row.clientName}</p>
                  <p className="text-sm text-gray-500">{row.clientCompany}</p>
                </div>
              </div>
            )
          },
          { 
            key: 'rating', 
            header: 'Rating',
            render: (value: number) => (
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < value ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
              </div>
            )
          },
          { key: 'createdAt', header: 'Date', render: (value: string) => new Date(value).toLocaleDateString() },
          { key: 'actions', header: 'Actions', render: (value: any, row: any) => renderActions(row) },
        ];
      default:
        return [];
    }
  };

  const renderActions = (row: any) => (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleEdit(row)}
        className="p-1 text-blue-600 hover:text-blue-900"
      >
        <Edit className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleDelete(row.id)}
        className="p-1 text-red-600 hover:text-red-900"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );

  const handleAdd = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    switch (activeTab) {
      case 'achievements':
        setAchievements(achievements.filter(item => item.id !== id));
        break;
      case 'services':
        setServices(services.filter(item => item.id !== id));
        break;
      case 'videos':
        setVideos(videos.filter(item => item.id !== id));
        break;
      case 'skills':
        setSkills(skills.filter(item => item.id !== id));
        break;
      case 'tools':
        setTools(tools.filter(item => item.id !== id));
        break;
      case 'testimonials':
        setTestimonials(testimonials.filter(item => item.id !== id));
        break;
    }
  };

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setImagePreview('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    let imageUrl = editingItem?.image || imagePreview;
    
    // In a real app, you would upload the image to a server here
    if (selectedImage) {
      // Simulate image upload - in production, upload to your server/cloud storage
      imageUrl = imagePreview;
    }
    
    const newItem: any = {
      id: editingItem?.id || Date.now().toString(),
      ...Object.fromEntries(formData.entries()),
      createdAt: editingItem?.createdAt || new Date().toISOString(),
      image: imageUrl,
    };

    switch (activeTab) {
      case 'achievements':
        if (editingItem) {
          setAchievements(achievements.map(item => item.id === editingItem.id ? newItem as Achievement : item));
        } else {
          setAchievements([...achievements, newItem as Achievement]);
        }
        break;
      case 'services':
        if (editingItem) {
          setServices(services.map(item => item.id === editingItem.id ? newItem as Service : item));
        } else {
          setServices([...services, newItem as Service]);
        }
        break;
      case 'videos':
        newItem.thumbnail = imageUrl;
        if (editingItem) {
          setVideos(videos.map(item => item.id === editingItem.id ? newItem as Video : item));
        } else {
          setVideos([...videos, newItem as Video]);
        }
        break;
      case 'skills':
        newItem.percentage = parseInt(newItem.percentage);
        if (editingItem) {
          setSkills(skills.map(item => item.id === editingItem.id ? newItem as Skill : item));
        } else {
          setSkills([...skills, newItem as Skill]);
        }
        break;
      case 'tools':
        if (editingItem) {
          setTools(tools.map(item => item.id === editingItem.id ? newItem as Tool : item));
        } else {
          setTools([...tools, newItem as Tool]);
        }
        break;
      case 'testimonials':
        newItem.avatar = imageUrl;
        newItem.rating = parseInt(newItem.rating);
        if (editingItem) {
          setTestimonials(testimonials.map(item => item.id === editingItem.id ? newItem as Testimonial : item));
        } else {
          setTestimonials([...testimonials, newItem as Testimonial]);
        }
        break;
      // Add similar cases for other content types
    }
    
    setIsModalOpen(false);
    setSelectedImage(null);
    setImagePreview('');
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'achievements':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <ImageUpload 
              onImageSelect={handleImageSelect}
              currentImage={imagePreview || editingItem?.image}
              onImageRemove={handleImageRemove}
            />
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={editingItem?.title}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              <textarea
                name="description"
                rows={3}
                defaultValue={editingItem?.description}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <select
                name="category"
                defaultValue={editingItem?.category}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Awards">Awards</option>
                <option value="Recognition">Recognition</option>
                <option value="Certifications">Certifications</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
              <input
                type="date"
                name="date"
                defaultValue={editingItem?.date}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingItem ? 'Update' : 'Add'} Achievement
              </Button>
            </div>
          </form>
        );
      
      case 'services':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <ImageUpload 
              onImageSelect={handleImageSelect}
              currentImage={imagePreview || editingItem?.image}
              onImageRemove={handleImageRemove}
            />
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={editingItem?.title}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              <textarea
                name="description"
                rows={3}
                defaultValue={editingItem?.description}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
                <input
                  type="text"
                  name="price"
                  defaultValue={editingItem?.price}
                  required
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                <select
                  name="category"
                  defaultValue={editingItem?.category}
                  required
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Consulting">Consulting</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
              <select
                name="status"
                defaultValue={editingItem?.status}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingItem ? 'Update' : 'Add'} Service
              </Button>
            </div>
          </form>
        );
      
      case 'videos':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <ImageUpload 
              onImageSelect={handleImageSelect}
              currentImage={imagePreview || editingItem?.thumbnail}
              onImageRemove={handleImageRemove}
            />
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={editingItem?.title}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              <textarea
                name="description"
                rows={3}
                defaultValue={editingItem?.description}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Video Link</label>
              <input
                type="url"
                name="link"
                defaultValue={editingItem?.link}
                required
                placeholder="https://youtube.com/watch?v=..."
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Views</label>
              <input
                type="number"
                name="views"
                defaultValue={editingItem?.views || 0}
                min="0"
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingItem ? 'Update' : 'Add'} Video
              </Button>
            </div>
          </form>
        );

      case 'skills':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Skill Name</label>
              <input
                type="text"
                name="name"
                defaultValue={editingItem?.name}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <select
                name="category"
                defaultValue={editingItem?.category}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Language">Language</option>
                <option value="Database">Database</option>
                <option value="DevOps">DevOps</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Proficiency (%)</label>
              <input
                type="number"
                name="percentage"
                defaultValue={editingItem?.percentage}
                min="0"
                max="100"
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingItem ? 'Update' : 'Add'} Skill
              </Button>
            </div>
          </form>
        );

      case 'tools':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Tool Name</label>
              <input
                type="text"
                name="name"
                defaultValue={editingItem?.name}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <select
                name="category"
                defaultValue={editingItem?.category}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Editor">Editor</option>
                <option value="Design">Design</option>
                <option value="DevOps">DevOps</option>
                <option value="Version Control">Version Control</option>
                <option value="Database">Database</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Icon Name</label>
              <input
                type="text"
                name="icon"
                defaultValue={editingItem?.icon}
                placeholder="e.g., Code, Figma, Container"
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingItem ? 'Update' : 'Add'} Tool
              </Button>
            </div>
          </form>
        );

      case 'testimonials':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <ImageUpload 
              onImageSelect={handleImageSelect}
              currentImage={imagePreview || editingItem?.avatar}
              onImageRemove={handleImageRemove}
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Client Name</label>
                <input
                  type="text"
                  name="clientName"
                  defaultValue={editingItem?.clientName}
                  required
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                <input
                  type="text"
                  name="clientCompany"
                  defaultValue={editingItem?.clientCompany}
                  required
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Rating</label>
              <select
                name="rating"
                defaultValue={editingItem?.rating}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Feedback</label>
              <textarea
                name="feedback"
                rows={4}
                defaultValue={editingItem?.feedback}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingItem ? 'Update' : 'Add'} Testimonial
              </Button>
            </div>
          </form>
        );

      default:
        return (
          <div className="text-center py-8 text-gray-400">
            Form for {activeTab} coming soon...
          </div>
        );
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Content Management</h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage your portfolio content and sections
          </p>
        </div>
        <Button onClick={handleAdd} icon={Plus}>
          Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
        </Button>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700">
        <div className="border-b border-gray-700">
          <nav className="flex flex-wrap gap-2 sm:gap-8 px-4 sm:px-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ContentType)}
                className={`flex items-center space-x-2 py-4 px-2 sm:px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-x-auto">
          <Table columns={getColumns()} data={getCurrentData()} />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${editingItem ? 'Edit' : 'Add'} ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}`}
        size="lg"
      >
        {renderForm()}
      </Modal>
    </div>
  );
}