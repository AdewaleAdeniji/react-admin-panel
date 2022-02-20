import React from 'react';
import { Card, Col, CardBody, Button, UncontrolledTooltip } from 'reactstrap';
import avatarImg7 from '../../../assets/images/users/avatar-7.jpg';

const Tooltips = () => {
    const placements = [
        {
            placement: 'top',
            text: 'Top ',
        },
        {
            placement: 'bottom',
            text: 'Bottom ',
        },
        {
            placement: 'left',
            text: 'Left',
        },
        {
            placement: 'right',
            text: 'Right',
        },
    ];

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h5 className="header-title mb-1 mt-0">Tooltips</h5>
                    <p className="sub-header">Four options are available: top, right, bottom, and left aligned</p>

                    <div className="button-list">
                        {placements.map((tooltip, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <Button className="mr-1" color="primary" type="button" id={'tbtn-' + i}>
                                        {tooltip.text}
                                    </Button>
                                    <UncontrolledTooltip
                                        placement={tooltip.placement}
                                        id={'tooltip-' + i}
                                        target={'tbtn-' + i}>
                                        <Col md={6} xl={3}>
                                            <Card>
                                                <CardBody className="pb-0">
                                                    <div className="text-center mt-3">
                                                        <img src={avatarImg7} alt=""
                                                            className="avatar-xl rounded-circle" />
                                                        <h5 className="mt-2 mb-0">Shreyu N</h5>
                                                        <h6 className="text-muted font-weight-normal mt-2 mb-4">User Experience Specialist</h6>

                                                        <button type="button" className="btn btn-primary btn-sm mr-1">Follow</button>
                                                        <button type="button" className="btn btn-white btn-sm">Message</button>

                                                        <div className="mt-4 pt-3 border-top text-left">
                                                            <p className="text-muted mb-2">Hi I'm Shreyu. I am user experience and user
                                                                interface designer.
                                                                            I have been working on UI & UX since last 10 years.</p>

                                                            <p className="mb-2">
                                                                <label className="badge badge-soft-success mr-1">UI & UX</label>
                                                                <label className="badge badge-soft-success">Frontend Development</label>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                </UncontrolledTooltip>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Tooltips;
