// components/icons/StarIcon.tsx

interface StarIconProps {
    size?: number;
    color?: string;
    className?: string;
}

export default function StarIcon({
    size = 24,
    color = "#F1C40F",
    className = "",
}: StarIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M22 9.81a1 1 0 0 0-.83-.69l-5.7-.78-2.59-4.81a1 1 0 0 0-1.76 0L8.57 8.34l-5.7.78a1 1 0 0 0-.82.69 1 1 0 0 0 .28 1l4.09 3.73-1 5.24A1 1 0 0 0 6.88 20.9L12 18.38l5.12 2.52a1 1 0 0 0 .44.1 1 1 0 0 0 1-1.18l-1-5.24 4.09-3.73A1 1 0 0 0 22 9.81Z"
                fill={color}
            />
        </svg>
    );
}