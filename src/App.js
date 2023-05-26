import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';

const Card = ({ title, description ,image , email, phone }) => {
  return (

      <div className="bg-white rounded-lg shadow">
        <div className="flex flex-col md:flex-row items-center md:items-start p-3">
          <div className="flex-grow md:mr-3">
            <h2 className="text-xl font-semibold">{title} 
              <span className="rounded-full text-xs text-emerald-900 bg-green-100 border p-1 ml-2">Admin</span>
            </h2>
            <span className="text-slate-500 text-sm">{description}</span>
          </div>
          <div className="p-3 flex justify-end mt-3 md:mt-0">
            <img src={image} alt="img" className="w-8 h-8 rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-2 text-center border-t mt-2">
        <div className="border-r p-2">
        <button>
            <MdEmail className="inline-block mr-2 text-slate-400  " />
            {email}
          </button>
        </div>
        <div className="p-2">
          <button>
            <MdPhone className="inline-block mr-2 text-slate-400" />
            {phone}
          </button>
        </div>
        </div>
      </div>
        );
};

const Grid = () => {
  const data = [
    {
      title: 'Ava Thompson',
      description: 'Regional Paradigm Technician',
      image: require('./images/img1.jpg'),
      email: 'Email',
      phone: 'Call',
    },
    {
      title: 'Liam Johnson',
      description: 'Product Directives officer',
      image: require('./images/img2.jpg'),
      email: 'Email',
      phone: 'Call',
    },
    {
      title: 'Mia Anderson',
      description: 'Forward Response Developer',
      image: require('./images/img3.jpg'),
      email: 'Email',
      phone: 'Call',
    },
    {
      title: 'Harper Martinez',
      description: 'Central Security Manager',
      image:require('./images/img4.jpg'),
      email: 'Email',
      phone: 'Call',
    },
    {
      title: 'Ethan Williams',
      description: 'Lead Implementaion Liaison',
      image: require('./images/img5.jpg'),
      email: 'Email',
      phone: 'Call',
    },
    {
      title: 'Oliver Davis',
      description: 'Internal Applications Engineer',
      image:require('./images/img6.jpg'),
      email: 'Email',
      phone: 'Call',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-5">
    <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((card, index) => (
        <div key={index}>
          <Card
            title={card.title}
            description={card.description}
            image={card.image}
            email={card.email}
            phone={card.phone}
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default Grid;
