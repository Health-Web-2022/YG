import * as React from 'react';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Post_id, Title, Writer) {
    return { Post_id, Title, Writer };
}

const rows = [
    createData('1', 'Title 1', 'user 1'),
    createData('2', 'Title 2', 'user 2'),
];

export default function Community() {
    return (
        <div>
            <Navbar />
            <Box>
                <Button sx={{ fontWeight: 'bold' }} href="/newpost">게시글 등록</Button>
            </Box>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Post_id</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align ="right">Writer</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow>
                                <TableCell component="th" scope="row">{row.Post_id}</TableCell>
                                <TableCell component="th" scope="row">{row.Title}</TableCell>
                                <TableCell component="th" scope="row" align ="right">{row.Writer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
