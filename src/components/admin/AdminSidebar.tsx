
import React from 'react';
import { FileText, Image, MessageSquare, Pencil } from 'lucide-react';

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="p-6">
        <div className="text-2xl font-bold text-furniture-navy">Dream<span className="text-furniture-forest">House</span></div>
        <div className="text-sm text-gray-500 mt-1">Paneli i Administratorit</div>
      </div>
      <nav className="mt-6">
        <a href="#dashboard" className="flex items-center px-6 py-3 bg-gray-100 text-furniture-forest">
          <FileText className="h-5 w-5 mr-3" />
          <span>Artikuj</span>
        </a>
        <a href="#projects" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <Image className="h-5 w-5 mr-3" />
          <span>Projektet</span>
        </a>
        <a href="#messages" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <MessageSquare className="h-5 w-5 mr-3" />
          <span>Mesazhe</span>
        </a>
        <a href="#settings" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <Pencil className="h-5 w-5 mr-3" />
          <span>Cilësime</span>
        </a>
      </nav>
    </div>
  );
};

export default AdminSidebar;
