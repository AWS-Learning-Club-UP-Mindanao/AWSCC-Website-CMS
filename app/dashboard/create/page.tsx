import EventForm from '@/components/dashboard/EventForm';
import Navbar from '@/components/dashboard/Navbar';

export default function CreateEventPage() {
        return (
        <main className="min-h-screen bg-[#EBF0FF] flex justify-center">
            <div className="w-full max-w-[1440px] px-[29px] py-[14px] flex flex-row gap-[10px]">
                <Navbar/>
                <EventForm/>
            </div>
        </main>
    );
}
