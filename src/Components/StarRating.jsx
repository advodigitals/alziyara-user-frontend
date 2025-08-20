import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


const StarRating = (props) => {
    const ratingValue = props.rating
    // const labels = {
    //     0.5: 'Useless',
    //     1: 'Useless+',
    //     1.5: 'Poor',
    //     2: 'Poor+',
    //     2.5: 'Ok',
    //     3: 'Ok+',
    //     3.5: 'Good',
    //     4: 'Good+',
    //     4.5: 'Excellent',
    //     5: 'Excellent+',
    // };
    const value = ratingValue
    return (
        <>
            <Box className="flex items-center justify-center gap-1 text-lg font-medium">
                <Box >{[value]}</Box>
                <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }}  />}
                />
            </Box>
        </>
    )
}

export default StarRating
