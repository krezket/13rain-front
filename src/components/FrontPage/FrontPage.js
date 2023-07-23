import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useGetAllPagesQuery } from '../../redux/features/pagesSlice';

export default function FrontPage() {

    const {data} = useGetAllPagesQuery()

    console.log(data);

    return (
        <div>
            hi
            {/* {pages.map((item) => {
                <h2>{item.title}</h2>
            })} */}
        </div>
    )
}
