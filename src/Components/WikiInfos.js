import React, { useEffect, useState } from 'react';

const Wikiinfos = ({city}) => {

    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchData = async () => {            
            var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&&gsrsearch="+city;

            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const obj = data.query.pages;
            const firstProperty = obj[Object.keys(obj)[0]];
            // console.log(firstProperty);
            
            const description = firstProperty.extract;
            setDescription(description);

            const img = firstProperty.thumbnail.source;
            setImage(img);
            
        }
        fetchData();
    },[city])

    return(
        <div className="row">
            <div className="text col-12 col-lg-8">
                {description}
            </div>
            <div className="text col-12 col-lg-4">
                <img alt={city} src={image} />
            </div>
        </div>
    )
}

export default Wikiinfos;