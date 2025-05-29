
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Calendar } from "lucide-react";

interface MessageTemplateProps {
  selectedTemplate: string;
  setSelectedTemplate: (value: string) => void;
  messageParams: {
    customerName: string;
    promotionDetails: string;
    expiryDate: string;
  };
  setMessageParams: (params: any) => void;
}

export const MessageTemplate = ({ 
  selectedTemplate, 
  setSelectedTemplate, 
  messageParams, 
  setMessageParams 
}: MessageTemplateProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="template">Select Template</Label>
            <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="promotion">Promotion Template</SelectItem>
                <SelectItem value="welcome">Welcome Template</SelectItem>
                <SelectItem value="reminder">Reminder Template</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="headerType">Header Type</Label>
            <Select defaultValue="image">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="video">Video</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Header Image</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
              <Button variant="outline" size="sm">
                Upload Image
              </Button>
              <p className="text-xs text-gray-500 mt-2">JPG, PNG (Max: 5MB)</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Message Parameters</h3>
          
          <div>
            <Label htmlFor="customerName">Customer Name</Label>
            <Input
              id="customerName"
              value={messageParams.customerName}
              onChange={(e) => setMessageParams({...messageParams, customerName: e.target.value})}
              placeholder="{{customer_name}}"
            />
          </div>

          <div>
            <Label htmlFor="promotionDetails">Promotion Details</Label>
            <Input
              id="promotionDetails"
              value={messageParams.promotionDetails}
              onChange={(e) => setMessageParams({...messageParams, promotionDetails: e.target.value})}
              placeholder="{{promotion_details}}"
            />
          </div>

          <div>
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <div className="relative">
              <Input
                id="expiryDate"
                type="date"
                value={messageParams.expiryDate}
                onChange={(e) => setMessageParams({...messageParams, expiryDate: e.target.value})}
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
