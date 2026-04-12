import EventForm from '@/components/dashboard/EventForm';
import Navbar from '@/components/dashboard/Navbar';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
    weight:['400','500','600','700'],
});

export default function CreateEventPage() {
        return (
        <main className={`${manrope.className} text-[#1a1a1a] min-h-screen bg-[#EBF0FF] flex justify-center`}>
            <div className="w-full max-w-[1440px] px-[29px] py-[14px] flex flex-row gap-[10px]">
                <Navbar/>
                <EventForm/>
            </div>
        </main>
    );
}
