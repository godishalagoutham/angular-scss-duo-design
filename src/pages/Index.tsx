
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppHeader } from "@/components/WhatsAppHeader";
import { ContactUpload } from "@/components/ContactUpload";
import { MessageTemplate } from "@/components/MessageTemplate";
import { MessagePreview } from "@/components/MessagePreview";
import { ContactTable } from "@/components/ContactTable";
import { DeliveryAnalytics } from "@/components/DeliveryAnalytics";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [messageParams, setMessageParams] = useState({
    customerName: "",
    promotionDetails: "",
    expiryDate: ""
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <WhatsAppHeader />
      
      <div className="container mx-auto p-6 space-y-6">
        {/* Contact Source Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Source</h2>
          <ContactUpload />
        </Card>

        {/* Message Template Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Message Template</h2>
          <MessageTemplate 
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
            messageParams={messageParams}
            setMessageParams={setMessageParams}
          />
        </Card>

        {/* Message Preview and Analytics Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Message Preview</h2>
            <MessagePreview 
              template={selectedTemplate}
              params={messageParams}
            />
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Delivery Analytics</h2>
            <DeliveryAnalytics />
          </Card>
        </div>

        {/* Contact Preview Table */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Preview</h2>
          <ContactTable />
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" className="px-8">
            Edit Contacts
          </Button>
          <Button variant="outline" className="px-8">
            Download Payload
          </Button>
          <Button className="px-8 bg-green-600 hover:bg-green-700">
            Send Bulk Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
