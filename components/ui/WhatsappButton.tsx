import WhatsappIcon from "../icons/WhatsappIcon";

interface WhatsappButtonProps {
    phoneNumber: string;
    message: string;
}

export default function WhatsappButton({ phoneNumber, message }: WhatsappButtonProps) {
    const url = message ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}` : `https://wa.me/${phoneNumber}`
    return (
        <>
            <a href={url}
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-300"
            >
                <WhatsappIcon size={28} />

            </a>
        </>
    )
}