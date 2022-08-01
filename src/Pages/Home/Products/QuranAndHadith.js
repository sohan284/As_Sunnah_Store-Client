import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import QuranAndHadith1 from './QuranAndHadith1';

const QuranAndHadith = () => {
    const [products] = useProducts([]);
    return (
        <div>
             <h1 className='text-primary text-5xl font-bold ml-10'>Quran & Hadith</h1>
            {
                products.map(quran=><QuranAndHadith1 quran={quran}></QuranAndHadith1>)
            }
        </div>
    )
};

export default QuranAndHadith;