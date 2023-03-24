import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Autocomplete, Pagination, Stack, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';

function createData(name, description, date,) {
    return {
        name,
        description,
        date,
    };
}

const rows = [
    createData('Linkdin', "LinkedIn News India shared a post:…", "20 Mar"),
    createData('Youtube', "Nodejs Developer Roadmap 2023 | Melih Yumak in JavaScript in Plain English", "20 Mar"),
    createData('MongoDB Team', "Deploy a free sandbox cluster and start exploring Atlas", "22 Mar",),
    createData('Tech News', 'How to use chatGPT for UI/UX design: 25 examples | Thalion in Prototypr', '23 Mar'),
    createData('Daily Post', 'Google India just posted something that might be of interest to you.', '10 Mar'),
    createData('Medium Daily Digest', 'Serializing JSON Data in Rails | Brenden Thornton in Zero Equals False.', '8 Mar')
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'description',
        numeric: false,
        disablePadding: false,
        label: 'Description ',
    },
    {
        id: 'date',
        numeric: true,
        disablePadding: false,
        label: 'Date',
    },

];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};




function EnhancedTableToolbar(props) {
    const { numSelected } = props;


    return (
        <Toolbar
            sx={{
                bgcolor: 'var(--primary-color)',
                px: { sm: 'var(--column-gap)' },
                // ...(numSelected > 0 && {
                //     bgcolor: (theme) =>
                //         alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                // }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Table Header
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <></>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('date');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [selectedRow, setSelectedRow] = React.useState([]);


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };
    const [toggle, setToggle] = React.useState(true)



    const handleClick = (event, name) => {

        const  newRowSelected = rows.map((index) => index)
        setSelectedRow(newRowSelected)
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const GroupHeader = styled('div')(({ theme }) => ({
        position: 'sticky',
        top: '-8px',
        padding: '4px 10px',
    }));

    const GroupItems = styled('ul')({
        padding: 0,
    });


    const options = rows.map((option) => {
        const firstLetter = option.name[0]
        return {
            firstLetter: firstLetter,
            ...option,
        };
    });


    console.log("selectetrow", selectedRow)
    console.log("selected",selected)

    
    return (
        <Box sx={{ width: '100%' }}>
            <Paper
                sx={{
                    width: '100%',
                    boxShadow: 'none',
                }}
            >
                <EnhancedTableToolbar numSelected={selected.length} />

                <Box
                    sx={{
                        paddingX: 'var(--column-gap)',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        my: 'var(--column-gap)',
                    }}
                >
                    <Autocomplete
                        id="grouped-demo"
                        options={options}
                        getOptionLabel={(option) => option.name}
                        onChange={(event, value) => setSelectedOption(value)}
                        renderInput={(params) => <TextField {...params} label="Searchable Dropdown" />}
                        renderGroup={(params) => (
                            <li key={params.key}>
                                <GroupHeader>{params.group}</GroupHeader>
                                <GroupItems>{params.children}</GroupItems>
                            </li>
                        )}
                        sx={{
                            minWidth: '300px',
                            'input': {
                                fontWeight: '500',
                                fontSize: 'var(--body-size)',
                                color: 'var(--secondary-color)',
                                lineHeight: 'var(--body-leading)',
                            },
                            'label': {
                                fontWeight: '500',
                                fontSize: 'var(--body-size)',
                                color: 'var(--secondary-color)',
                                lineHeight: 'var(--body-leading)',
                            },
                            'label.Mui-focused': {
                                color: 'var(--secondary-color)',
                            },
                            'fieldset': {
                                borderColor: 'var(--grey-border) !important',
                            },
                            '.Mui-focused': {
                                'fieldset': {
                                    borderColor: 'var(--primary-color) !important',
                                }
                            },
                            '.MuiInputBase-root': {
                                borderRadius: '4px',
                            }
                        }}
                    />

                    {toggle ? (
                        <MenuOutlinedIcon
                            onClick={() => setToggle(false)}
                        />)
                        : (
                            <ViewComfyOutlinedIcon
                                onClick={() => setToggle(true)}
                            />
                        )
                    }
                </Box>
                <TableContainer>
                    <Table
                        stickyHeader aria-label="sticky table"
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />

                        <TableBody>
                            {stableSort(
                                rows.filter(row => !selectedOption || row.name === selectedOption.name)
                                , getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => {
                                                handleClick(event, row.name)
                                            }}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>

                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">{row.description}</TableCell>
                                            <TableCell align="right">{row.date}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>

                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[3, 5, 10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                {/* <Stack
                    sx={{
                        paddingY: 'var(--md-gap)',
                    }}
                >
                    <Pagination
                        count={10}
                        sx={{
                            '& ul': {
                                justifyContent: 'center',
                                '& li button': {
                                    fontWeight: '500',
                                    height: 'var(--sm-box-size)',
                                    width: 'var(--sm-box-size)',
                                    borderRadius: 'var(--sm-box-size)',
                                    fontSize: 'var(--body-size)',
                                    lineHeight: 'var(--sm-leading)',
                                    color: 'var(--secondary-color)',
                                    '&:hover': {
                                        bgcolor: 'rgba(28, 27, 31, 0.08)'
                                    }
                                },
                                '& li button.Mui-selected': {
                                    bgcolor: 'var(--primary-color) !important',
                                }
                            }
                        }}
                    />
                </Stack> */}
            </Paper>

            {!toggle &&
                <Box
                    textAlign="center"
                    p={2}
                    borderRadius={8}
                    borderBottom="40px"
                >
                    <Typography variant="h6">No conversations selected</Typography>
                    <Typography variant="body1">This is a custom Box component.</Typography>
                </Box>
            }
            {selectedRow && (
                 <Box>
                 <Typography variant="h5" component="h2">
                     {selectedRow.name}
                 </Typography>
                 <Typography color="textSecondary" gutterBottom>
                     {selectedRow.description}
                 </Typography>
                 <Typography variant="body2" component="p">
                     {selectedRow.details}
                 </Typography>
             </Box>
            )}
        </Box >
    );
}

