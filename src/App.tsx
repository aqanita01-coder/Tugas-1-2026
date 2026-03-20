import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DotLottiePlayer } from "@dotlottie/react-player"; // Pakai DotLottiePlayer
import "@dotlottie/react-player/dist/index.css"; // Import CSS-nya
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Memberi waktu loading 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading ? (
          // Tampilan Loading Screen
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-500">
            <div style={{ width: '300px', height: '300px' }}>
              <DotLottiePlayer
                src="https://lottie.host/ca385c87-61ae-4bc8-a3f5-1867ffa945ac/PlRrnk4feG.lottie"
                autoplay
                loop
              />
            </div>
          </div>
        ) : (
          // Tampilan Utama Aplikasi
          <>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;