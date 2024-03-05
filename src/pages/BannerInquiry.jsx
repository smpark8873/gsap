function BannerInquiry () {  
     
    return(  
        <div className="bnr_inquiry bg-cover">
            <a href="fran.asp.html#none" className="top_btn abs">
                <img className="rel" src="/img/common/top_btn.png" alt="" />
                <span className="top_fill_wrap abs">
                    <span className="top_fill bg-full"></span>
                </span>
            </a>
            <div className="inner clearfix">
                <div className="bnr_inquiry_tel">
                    <div className="col1 cols bg-cover">
                    </div>
                    <div className="col2 cols bg-cover">
                        <span className="hidden">바나타이거 가맹문의 1600.4458</span>
                    </div>
                </div>
                <form method="post" className="bnr_inquiry_form" id="bnr_inquiry_form">
                    <fieldset>
                        <legend className="hidden">바나타이거 가맹문의</legend>
                        <div className="clearfix">
                            <div className="f_left">
                                <div className="type_text bnr_inquiry_box f_left">
                                    <label for="bnr_name" className="type_txt_label">이름</label>
                                    <input type="text" name="writer_name" id="bnr_name" className="labeling" autocomplete="off" />
                                </div>
                                <div className="type_text bnr_inquiry_box f_left">
                                    <label for="bnr_hp" className="type_txt_label">연락처</label>
                                    <input type="text" name="call_number" id="bnr_hp" className="labeling phone_check" autocomplete="off" />
                                </div>
                                <div className="type_sel bnr_inquiry_box f_left">
                                    <select name="city" className="legion" id="legion">
                                        <option value="">지역</option>
                                        <option value="서울">서울</option>
                                        <option value="부산">부산</option>
                                        <option value="대구">대구</option>
                                        <option value="인천">인천</option>
                                        <option value="광주">광주</option>
                                        <option value="대전">대전</option>
                                        <option value="울산">울산</option>
                                        <option value="세종">세종</option>
                                        <option value="경기">경기</option>
                                        <option value="강원">강원</option>
                                        <option value="충북">충북</option>
                                        <option value="충남">충남</option>
                                        <option value="전북">전북</option>
                                        <option value="전남">전남</option>
                                        <option value="경북">경북</option>
                                        <option value="경남">경남</option>
                                        <option value="제주">제주</option>
                                    </select>
                                </div>
                            </div>
                            <div className="bnr_inqury_chk f_left">
                                <input type="checkbox" name="agree" id="bnr_inq_chk" />
                                <label for="bnr_inq_chk" className="chk_label">개인정보수집 동의</label>
                            </div>
                            <p className="bnr_check_agree f_left"><a href="fran.asp.html#none" className="bindPolicyModalOpen">개인정보수집</a> 동의</p>
                            <button type="submit" id="bnrInquirySubmit" className="bnr_inquiry_send f_left">보내기</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default BannerInquiry;