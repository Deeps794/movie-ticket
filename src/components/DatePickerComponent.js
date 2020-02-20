import React from 'react';
import DatePicker from 'react-datepicker';

export function SelectDatePicker(props) {
    return (
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header" style={{ background: '#344955', color: 'white' }}>
                        <h5 className="modal-title" id="staticBackdropLabel">Select a date</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.onChange}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-center" style={{ background: '#344955', color: 'white' }}>
                        <DatePicker selected={props.date} onChange={props.onChange} maxDate={props.maxDate}
                            value={props.selectedDate} placeholderText="Choose a date" minDate={props.minDate}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectDatePicker;