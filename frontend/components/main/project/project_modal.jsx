import React from 'react';
import Modal from 'react-modal';
import ProjectViewContainer from './project_view_container';

const style = {
  overlay : {
    position                   : 'fixed',
    top                        : 0,
    left                       : 0,
    right                      : 0,
    bottom                     : 0,
    backgroundColor            : 'rgba(0, 0, 0, .9)',
    zIndex                     : 10
  },
  content : {
    display                    : 'flex',
    justifyContent             : 'center',
    top                        : 0,
    bottom                     : 0,
    left                       : '25%',
    right                      : '25%',
    border                     : 0,
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '0',
    outline                    : 'none',
    padding                    : '0',
    backgroundColor            : '#f2f2f2',
    zIndex                     : 11,
    opacity                    : 0,
    transition                 : 'opacity 0.4s'
  }
};
class BoardDetailModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  afterModalOpen() {
    style.content.opacity = 100;
  }

  render() {
    const { items, project } = this.props;
    return(
      <div>
        <div onClick={this.openModal} className="projects-index-item">
          <img src={`http://res.cloudinary.com/krwappacademy/image/upload/c_thumb,h_200,w_200/v1500849204/${items[project.splash_id].source_url}.png`} /> 
          <span>{project.title}</span>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Board Modal">
          <ProjectViewContainer project={project}/>
        </Modal>
      </div>
    );
  }
}

export default BoardDetailModal;