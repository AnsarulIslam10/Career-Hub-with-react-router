import React from 'react';

const Category = ({category}) => {
    const {logo, category_name, availability} = category
    return (
        <div className='p-8 bg-blue-50 rounded-xl cursor-pointer'>
            <img src={logo} alt="" />
            <h3 className='font-bold mt-3'>{category_name}</h3>
            <p className='text-gray-600'>{availability}</p>
        </div>
    );
};

export default Category;