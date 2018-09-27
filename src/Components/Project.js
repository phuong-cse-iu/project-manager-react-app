import React from 'react';
import ReactDOM from 'react-dom';

class Project extends React.Component {
    render() {
        const {projects} = this.props;
        console.log(this.props.projects);
        return (
            <div className="card card-body mb-3">
                <ul className="list-group">
                    {projects.map(project =>
                        <li className="list-group-item">
                            <h3>{project.category}</h3>
                            <p>{project.title}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Project;