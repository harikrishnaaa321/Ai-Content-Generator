import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link
import { TEMPLATE } from './TemplateListSection';

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white cursor-pointer hover:scale-105 transition-all">
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className="text-lg font-bold mt-2">{item.name}</h2>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;
