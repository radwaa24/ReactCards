{/*} image: 'https://unsplash.com/photos/mEZ3PoFGs_k?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
name: 'Card 1',
description: 'This is the first card.',
},
{
image: 'https://unsplash.com/photos/ZHvM3XIOHoE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
name: 'Card 2',
description: 'This is the second card.',
},
{
image: 'https://unsplash.com/photos/IF9TK5Uy-KI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
name: 'Card 3',
description: 'This is the third card.',
},
const Card = ({ title, description }) => {
    return (
      <div className="bg-white rounded-lg p-4 shadow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  const Grid = () => {
    const data = [
      {
        title: 'Card 1',
        description: 'This is the first card.',
      },
      {
        title: 'Card 2',
        description: 'This is the second card.',
      },
      {
        title: 'Card 3',
        description: 'This is the third card.',
      },
    ];
  
    return (
      <div className="m-5 grid grid-cols-3 gap-4">
        {data.map((card, index) => (
          <div key={index} className="col-span-1">
            <Card title={card.title} description={card.description} image={} />
          </div>
        ))}
      </div>
  
      
        );
      };
      
  
  export default Grid;
    */}