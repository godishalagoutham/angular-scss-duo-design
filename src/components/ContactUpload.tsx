
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, FileText } from "lucide-react";

export const ContactUpload = () => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    // Handle file drop logic here
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center space-x-2">
          <input type="radio" id="csv" name="source" className="w-4 h-4" defaultChecked />
          <label htmlFor="csv" className="text-sm font-medium">CSV Upload</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="manual" name="source" className="w-4 h-4" />
          <label htmlFor="manual" className="text-sm font-medium">Manual Entry</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="groups" name="source" className="w-4 h-4" />
          <label htmlFor="groups" className="text-sm font-medium">Existing Groups</label>
        </div>
      </div>

      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragOver ? "border-green-500 bg-green-50" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <p className="text-lg font-medium mb-2">Drag and drop your CSV file here</p>
        <p className="text-gray-500 mb-4">or</p>
        <Button variant="outline" className="mb-4">
          <FileText className="w-4 h-4 mr-2" />
          Choose File
        </Button>
        <p className="text-sm text-gray-500">
          Supported format: CSV (Max file size: 10MB)
        </p>
      </div>

      <div className="flex gap-4">
        <Button variant="outline">
          Download Sample CSV
        </Button>
        <Button variant="outline">
          View Upload History
        </Button>
      </div>
    </div>
  );
};
