import React from 'react';
import { useGetAllPagesQuery } from '../../redux/features/pagesSlice';

export default function FrontPage() {

    const {data} = useGetAllPagesQuery()

    console.log(data);

    return (
        <div>
            hi
            {/* {pages.map((data) => {
                <h2>{data.title}</h2>
            })} */}
        </div>
    )
}
