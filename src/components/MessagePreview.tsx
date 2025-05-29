
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCheck } from "lucide-react";

interface MessagePreviewProps {
  template: string;
  params: {
    customerName: string;
    promotionDetails: string;
    expiryDate: string;
  };
}

export const MessagePreview = ({ template, params }: MessagePreviewProps) => {
  const getMessageContent = () => {
    if (template === "promotion") {
      return `Hi ${params.customerName || "{{customer_name}}"}! 

🎉 Special promotion just for you: ${params.promotionDetails || "{{promotion_details}}"}

Valid until: ${params.expiryDate || "{{expiry_date}}"}

Don't miss out! Click here to claim your offer.`;
    }
    return "Select a template to preview the message";
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-green-100 rounded-lg p-4 space-y-3">
        {/* WhatsApp-style header image placeholder */}
        <div className="bg-gray-200 rounded h-32 flex items-center justify-center">
          <span className="text-gray-500">Header Image</span>
        </div>
        
        {/* Message content */}
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <p className="text-sm whitespace-pre-line">{getMessageContent()}</p>
          <div className="flex items-center justify-end mt-2 space-x-1">
            <span className="text-xs text-gray-500">12:34 PM</span>
            <CheckCheck className="w-4 h-4 text-blue-500" />
          </div>
        </div>
        
        {/* Business profile */}
        <div className="flex items-center space-x-2 text-xs text-gray-600">
          <Avatar className="w-6 h-6">
            <AvatarFallback className="text-xs">B</AvatarFallback>
          </Avatar>
          <span>Business Account</span>
        </div>
      </div>
    </div>
  );
};
