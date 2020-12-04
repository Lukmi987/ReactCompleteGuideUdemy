import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const Locations = ({ locations, fetchLocations }) => {
    useEffect(()=>{
        fetchLocations();
    },[]);

    return (
        locations && (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Country</th>
                <th>Code</th>
                <th>Cities</th>
            </tr>
            </thead>
            <tbody>
            {locations.map( location => (
                <tr key={location.code}>
                    <td>{location.country}</td>
                    <td>{location.code}</td>
                    <td>{location.cities}</td>
                </tr>
                )
             )
            }
            </tbody>
        </Table>
        )
    )
}

export default Locations;
