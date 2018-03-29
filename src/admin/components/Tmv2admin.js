import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import Listingstore from '../../store/Listingstore';
import {observer,inject} from  'mobx-react';
inject('Listingstore')
@observer
export default class Tmv2admin extends Component {
    constructor(props){
    	super(props);
      this.state = { showModal: false, listingDetail:'' };
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
    }
    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true });
    }
    submitTmv2(e){
      e.preventDefault();
      let send_data={
        'licensee':this.refs.licensee.value,
        'Manufacturer':this.refs.Manufacturer.value,
        'Approved_Mixing_Valve':this.refs.Approved_Mixing_Valve.value,
        'Unique_ID':this.refs.Unique_ID.value,
        'certnumber':this.refs.certnumber.value,
        'certdate':this.refs.certdate.value,
        'Certificate_Letters':this.refs.Certificate_Letters.value,
        'HP_1111':(this.refs.HP_1111.checked?'1':'0'),
        'Comments':this.refs.Comments.value,
        'HPB':(this.refs.HPB.checked?'1':'0'),
        'HPB_comment':this.refs.HPB_comment.value,
        'Extended_Comments':this.refs.Extended_Comments.value,
        'HPS':(this.refs.HPS.checked?'1':'0'),
        'HPS_comment':this.refs.HPS_comment.value,
        'Pts_Comments':this.refs.Pts_Comments.value,
        'HPW':(this.refs.HPW.checked?'1':'0'),
        'HPW_comment':this.refs.HPW_comment.value,
        'Primary_or_Secondary':this.refs.Primary_or_Secondary.value,
        'HPT':(this.refs.HPT.checked?'1':'0'),
        'HPT_comment':this.refs.HPT_comment.value,
        'First_Audit':this.refs.First_Audit.value,
        'Cold_isol_46_hp':(this.refs.Cold_isol_46_hp.checked?'1':'0'),
        'First_Completed':this.refs.First_Completed.value,
        'LP_1287':(this.refs.LP_1287.checked?'1':'0'),
        'Second_Audit':this.refs.Second_Audit.value,
        'LPB':(this.refs.LPB.checked?'1':'0'),
        'LPB_comment':this.refs.LPB_comment.value,
        'Second_Completed':this.refs.Second_Completed.value,
        'LPS':(this.refs.LPS.checked?'1':'0'),
        'LPS_comment':this.refs.LPS_comment.value,
        'Discontinued_Withdrawn':(this.refs.Discontinued_Withdrawn.checked?'1':'0'),
        'LPW':(this.refs.LPW.checked?'1':'0'),
        'LPW_comment':this.refs.LPW_comment.value,
        'Remove_from_Website':(this.refs.Remove_from_Website.checked?'1':'0'),
        'LPT':(this.refs.LPT.checked?'1':'0'),
        'LPT_comment':this.refs.LPT_comment.value,
        'New':(this.refs.New.checked?'1':'0'),
        'LPTx':(this.refs.LPTx.checked?'1':'0'),
        'LPTx_comment':this.refs.LPTx_comment.value,
        'Expiry_Date':this.refs.Expiry_Date.value,
        'Cold_isol_46_lp':(this.refs.Cold_isol_46_lp.checked?'1':'0')
      };
      Listingstore.saveTmv2(send_data);
    }
    checkCertificate(e){
      if (e.target.value.trim().length >= 4) {
        Listingstore.checkCertificate(e.target.value.trim());
      }
    }
    uploadImage(e){
      if (e.target.files.length>0) {
        Listingstore.uploadImage(e.target.files[0]);
      }
    }
    render() {
        return (
            <div className="class-name">
            <SplitButton
             bsStyle='success'
             title='TMV 2 Manage'
            >
             <MenuItem eventKey="1" onClick={this.open.bind(this)}>Add Approval</MenuItem>
            </SplitButton>
            <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
              <Modal.Header closeButton>
                <Modal.Title>Details</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{'width':'900px'}}>
              <div>
              <form id="tmv2_frm" action="" method="POST">
                  <table className="table table-bordered">
                  <tbody>
                            <tr>
                                <td><b>Licensee</b></td><td><input ref="licensee" type="text" className="textbox"  size="30" /></td>
                                <td><b>Manufacturer</b> </td><td><input ref="Manufacturer" type="text" className="textbox"  size="30" /></td>
                            </tr>
                            <tr>
                                <td><b>Mixing Valve</b></td><td><input ref="Approved_Mixing_Valve" type="text" className="textbox"  size="30"/></td>
                                <td><b>Unique Valve ID</b></td><td><input ref="Unique_ID" type="text" className="textbox"  size="30" /></td>
                            </tr>
                            <tr>
                                <td><b>Certificate Numbers</b></td>
                                <td><input ref="certnumber" type="number" className="textbox" placeholder="certificate number" size="10" onKeyUp={this.checkCertificate.bind(this)} />
                                <br/>{<span>{Listingstore.checkcertificate}</span>}</td>
                                <td>/</td><td> <input ref="certdate" type="number" className="textbox" placeholder="certificate date" size="10" /> </td>
                            </tr>
                            <tr>
                                <td><b>Certificate Letters</b></td><td><span id="certres"><input ref="Certificate_Letters" type="text" className="textbox" placeholder="certificate letter" size="10" /></span></td>
                                <td><b>HP_1111</b></td><td><input ref="HP_1111" type="checkbox" value="1" /></td>
                            </tr>
                            <tr>
                                <td><b>Comments</b></td><td><input ref="Comments" type="text" className="textbox"  size="30" /></td>
                                <td><b>B</b> <input ref="HPB" type="checkbox" value="1" /></td>
                                <td><b>Economy</b> <input ref="HPB_comment" type="text" className="textbox"  size="1" /></td>
                            </tr>
                            <tr>
                                <td><b>Extended Comments</b></td><td><input ref="Extended_Comments" type="text" className="textbox"  size="30" /></td>
                                <td><b>S</b> <input ref="HPS" type="checkbox" value="1" /></td>
                                <td><b>Economy</b> <input ref="HPS_comment" type="text" className="textbox"  size="1" /></td>
                            </tr>
                            <tr>
                                <td><b>Pts Comments</b></td><td><input ref="Pts_Comments" type="text" className="textbox"  size="30" /></td>
                                <td><b>W</b> <input ref="HPW" type="checkbox" value="1" /></td>
                                <td><b>Economy</b> <input ref="HPW_comment" type="text" className="textbox"  size="1" /></td>
                            </tr>
                            <tr>
                                <td><b>Primary_or_Secondary</b></td><td><input ref="Primary_or_Secondary" type="text" className="textbox"  size="30" /></td>
                                <td><b>T</b> <input ref="HPT" type="checkbox" value="1" /></td>
                                <td><b>Economy</b> <input ref="HPT_comment" type="text" className="textbox"  size="1" /></td>
                            </tr>
                            <tr>
                                <td><b>First_Audit</b></td><td><input ref="First_Audit" type="text" className="textbox"  size="30" /></td>
                                <td><b>Cold Isol 46</b> <input ref="Cold_isol_46_hp" type="checkbox" value="1" /></td><td></td>
                            </tr>
                            <tr>
                                <td><b>First_Completed</b></td><td><input ref="First_Completed" type="text" className="textbox"  size="30" /></td>
                                <td><b>LP_1287</b> <input ref="LP_1287" type="checkbox" value="1" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>Second_Audit</b></td><td><input ref="Second_Audit" type="text" className="textbox"  size="30" /></td>
                                <td><b>B</b> <input ref="LPB" type="checkbox" value="1" /></td>
                                <td><b>Economy</b> <input ref="LPB_comment" type="text" className="textbox"  size="1" /></td>
                            </tr>
                            <tr>
                                <td><b>Second_Completed</b></td><td><input ref="Second_Completed" type="text" className="textbox"  size="30" /></td>
                                <td><b>S</b> <input ref="LPS" type="checkbox" value="1" /></td>
                                <td><b>Economy</b> <input ref="LPS_comment" type="text" className="textbox"  size="1" /></td>
                            </tr>
                            <tr>
                                <td><b>Discontinued_Withdrawn</b></td><td><input ref="Discontinued_Withdrawn" type="checkbox" value="1" /></td>
                                <td><b>W</b> <input ref="LPW" type="checkbox" value="1" /></td>
                                <td><b>Economy</b> <input ref="LPW_comment" type="text" className="textbox"  size="1" /></td>
                            </tr>
                            <tr>
                                <td><b>Remove_from_Website</b></td><td><input ref="Remove_from_Website" type="checkbox" value="1" /></td>
                                <td><b>T</b> <input ref="LPT" type="checkbox" value="1" /></td>
                                <td><b>Economy</b> <input ref="LPT_comment" type="text" className="textbox"  size="1" /></td>
                            </tr>
                            <tr>
                                <td><b>New</b></td><td><input ref="New" type="checkbox" value="1" /></td>
                                <td><b>T 0.2</b> <input ref="LPTx" type="checkbox" value="1" /></td>
                                <td> <b>Economy</b> <input ref="LPTx_comment" type="text" className="textbox"  size="1" /></td>
                            </tr>
                            <tr>
                              <td><b>Expiry_Date</b></td><td><input ref="Expiry_Date" type="date" className="textbox"  size="30" /></td>
                              <td><b>Cold Isol 46</b> <input ref="Cold_isol_46_lp" type="checkbox" value="1" /></td><td></td>
                            </tr>
                            <tr>
                              <td>Image</td><td ><input type="file" id="img_file" ref='img_file' onChange={this.uploadImage.bind(this)} />
                              <br/>

                              </td>
                              <td>Url</td><td><input type="text" className="textbox" id="url_app"  size="30" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" onClick={this.submitTmv2.bind(this)} className="btn btn-primary" id="add_tmv2" value="Add Approval" />
                </form>
              </div>
                </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>
            </div>
        );
    }
}
