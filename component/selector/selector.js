'use client'
// MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Selector({ menuItems, onChange }) {
    const defaultValue = menuItems[0].value

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>정렬</InputLabel>
                <Select label="sortOption" defaultValue={ defaultValue } onChange={ onChange }>
                { menuItems.map((item, i) => <MenuItem value={ item.value }>{ item.name }</MenuItem>) }
                </Select>
            </FormControl>
        </Box>
    )
}