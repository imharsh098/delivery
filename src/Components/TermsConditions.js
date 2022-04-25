import { React, useState, useEffect } from "react";
import TopNav from "./TopNav";
import SideNav from "./sideNav";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function TermsConditions() {
  const history = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [dataTNC, setDataTNC] = useState("");
  useEffect(async () => {
    if (!userInfo) {
      history("/");
    }
    if (userInfo) {
      const config = {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`/api/orders/terms`, config);
      console.log(data.message);
      // setData(terms);
    }
  }, []);
  return (
    <div>
      <TopNav />
      <div className="main">
        <SideNav />

        <div
          className="modal fade"
          id="exampleModalLong"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Terms of Use
                </h5>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="txt">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Company Policy
                </h5>
              </div>
              <div className="modal-body">
                <div className="txt">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
