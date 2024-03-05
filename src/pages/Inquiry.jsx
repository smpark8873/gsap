import React from 'react';

function Inquiry () {  

    return(         
        <section className="inquiry t_center">
            <p className="inquiry_ttl ttl_wrap"><span className="ttl_up ttl60">창업문의</span></p>
            <div className="inquiry_wrap">
                <form method="post" action="" className="inquiry_form" id="inquiry_form">
                    <input type="hidden" name="KEYWORD_IDX" value="" />
                    <input type="hidden" name="KEYWORD" value="" />
                    <input type="hidden" name="REFERR_HOST_URL" value="" />
                    <fieldset className="iqr_policy_wrap">
                        <legend className="iqr_tit" style={{display:'none'}}>개인정보 수집 및 활용동의</legend>
                        <div className="iqr_policy" style={{display:'none'}}>
                            <ol>
                                <li className="b_fs_l b_ff_m b_lh_m b_c_l">
                                1. 개인정보의 수집 및 이용 목적<br />
                                가맹 관련 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
                                </li>
                                <li className="b_fs_l b_ff_m b_lh_m b_c_l">
                                2. 처리하는 개인정보 항목<br />
                                - 필수항목 : 이름, 연락처 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그)<br />
                                - 선택항목 : 이메일
                                </li>
                                <li className="b_fs_l b_ff_m b_lh_m b_c_l">
                                3. 개인정보의 처리 및 보유 기간<br />
                                ① 법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.<br />
                                ② 개인정보의 보유 기간은 5년입니다.
                                </li>
                            </ol>
                        </div>
                        <div className="iqr_check rel">
                            <input type="checkbox" name="agree" id="iqr_agree" value="Y"/>
                            <label for="iqr_agree" className="b_ff_m b_c_l">
                                <a href="fran.asp.html#none" className="bindPolicyModalOpen">개인정보취급방침</a>을 읽었으며 이에 동의합니다.
                            </label>
                        </div>
                    </fieldset>
                    <fieldset className="iqr_info">
                        <legend className="iqr_tit rel">상담자 정보<small className="iqr_dot b_ff_m">동그라미 표시는 필수입력항목입니다.</small></legend>
                        <table summary="상담자 정보 입력사항" className="inquiry_table">
                            <caption className="indent">상담자 정보 입력사항</caption>
                            <colgroup>
                                <col width="20%" className="col1" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row" className="col1"><label for="iqr_name" className="required">이름</label></th>
                                    <td className="col2">
                                        <input type="text" name="writer_name" id="iqr_name" required autocomplete="off" maxlength="10" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"><label for="iqr_hp" className="required">연락처</label></th>
                                    <td>
                                        <input type="text" name="call_number" id="iqr_hp" required autocomplete="off" className="phone_check" maxlength="13" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"><label className="required">창업희망지역</label></th>
                                    <td className="area_selects fs_def">
                                        <select name="city" id="area_select1">
                                            <option value="">시/도</option>
                                            <option value="서울">서울</option>
                                            <option value="경기">경기</option>
                                            <option value="인천">인천</option>
                                            <option value="부산">부산</option>
                                            <option value="대구">대구</option>
                                            <option value="광주">광주</option>
                                            <option value="대전">대전</option>
                                            <option value="울산">울산</option>
                                            <option value="세종">세종</option>
                                            <option value="강원">강원</option>
                                            <option value="충북">충북</option>
                                            <option value="충남">충남</option>
                                            <option value="전북">전북</option>
                                            <option value="전남">전남</option>
                                            <option value="경북">경북</option>
                                            <option value="경남">경남</option>
                                            <option value="제주">제주</option>
                                        </select>
                                        <select name="state" id="area_select2">
                                            <option value="">시/군/구</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"><label className="required">점포보유유무</label></th>
                                    <td className="cust_radios fs_def">
                                        <input type="radio" name="storeYn" id="iqr_radio01" value="Y"  checked />
                                        <label for="iqr_radio01" className="rd_lbl">있음</label>
                                        <input type="radio" name="storeYn" id="iqr_radio02" value="N" />
                                        <label for="iqr_radio02" className="rd_lbl">없음</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="v_top"><label for="iqr_command">문의내용</label></th>
                                    <td>
                                        <textarea name="contents" id="iqr_command"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="submit" id="franInquirySubmit" className="b_btn01">문의하기</button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}

export default Inquiry;