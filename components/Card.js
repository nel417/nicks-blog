import moment from "moment";
import Link from "next/link";

export default function Card({ title, coverPhoto, datePublished, slug }) {
    return (
        <Link href={`/posts/${slug}`} className="flex">
            <div className='flex mx-auto my-auto pb-10 font-bold flex-col p-10'>
                <div className='pb-2'>
                    <img src={coverPhoto.url} alt="" className="pb-2" />
                    <h2 className="text-xl pb-4">{title}</h2>
                    <h2 className="pb-1">By: Admin</h2>
                    <h3>{moment.utc(datePublished).format("DD-MMMM-YYYY")}</h3>
                </div>
            </div>
        </Link>
    );
}