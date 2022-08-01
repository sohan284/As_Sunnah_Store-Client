import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import QuranAndHadith1 from './QuranAndHadith1';

const QuranAndHadith = () => {
    const [products] = useProducts([]);
    return (
        <div>
            {
                products.map(quran=><QuranAndHadith1 quran={quran}></QuranAndHadith1>)
            }
        </div>
    )
};

export default QuranAndHadith;