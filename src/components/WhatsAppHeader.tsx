
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu } from "lucide-react";

export const WhatsAppHeader = () => {
  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <MessageCircle className="w-8 h-8" />
            <h1 className="text-2xl font-bold">WhatsApp Business API</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-white hover:bg-green-700">
              Home
            </Button>
            <Button variant="ghost" className="text-white hover:bg-green-700">
              Templates
            </Button>
            <Button variant="ghost" className="text-white hover:bg-green-700">
              Upload
            </Button>
            <Button variant="ghost" className="text-white hover:bg-green-700">
              Reports
            </Button>
            <Button variant="ghost" className="text-white hover:bg-green-700">
              Help
            </Button>
          </nav>
          
          <Button variant="ghost" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};
