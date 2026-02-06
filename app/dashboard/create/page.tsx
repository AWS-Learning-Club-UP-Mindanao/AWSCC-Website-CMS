import EventForm from '@/components/dashboard/EventForm';
import Navbar from '@/components/dashboard/Navbar';

export default function CreateEventPage() {
    return (
        <main className="min-h-screen h-auto bg-[#EBF0FF] px-[29px] py-[14px] flex flex-row gap-[10px]">
            <Navbar/>
            <EventForm/>
        </main>
    );
}
