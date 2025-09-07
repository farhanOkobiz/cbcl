import Image from "next/image";
import Link from "next/link";


const dummyTravelData = [
    {
        imageUrl: "https://cdn.pixabay.com/photo/2019/12/12/15/16/bangladesh-4690978_640.jpg",
        title: "Places Where Celebrities Hide",
        date: "MAR 25, 2020",
        category: "CRUISING",
    },
    {
        imageUrl: "https://cdn.pixabay.com/photo/2019/12/12/15/11/bangladesh-4690973_640.jpg",
        title: "Amazing Treks for All Travelers",
        date: "MAR 25, 2020",
        category: "URBAN",
    },
    {
        imageUrl: "https://cdn.pixabay.com/photo/2019/10/22/21/27/road-4569862_640.jpg",
        title: "Top Survival Tips for Everyone",
        date: "MAR 25, 2020",
        category: "CRUISING",
    },
    {
        imageUrl: "https://cdn.pixabay.com/photo/2018/09/12/22/47/nature-3673387_640.jpg",
        title: "These Travels Changed the World",
        date: "MAR 25, 2020",
        category: "URBAN",
    },
];

interface TravelCardProps {
    imageUrl: string;
    title: string;
    date: string;
    category: string;
}


const TravelCard: React.FC<TravelCardProps> = ({ imageUrl, title, date, category }) => (
    <Link href="">
        <div className="max-w-6xl relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority
            />
            <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end text-xs font-semibold uppercase">
                    <span>{date} : {category}</span>
                </div>
                <div className="self-start">
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
            </div>
        </div>
    </Link>
);

const Travel: React.FC = () => {
    return (
        <div className="Container mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dummyTravelData.map((card, idx) => (
                <TravelCard key={idx} {...card} />
            ))}
        </div>
    );
};

export default Travel;