pragma solidity >=0.4.22 <0.6.0;

contract Land {
    struct LandStruct {
        string plot_num;
        string street_num;
        string city;
        string province;
        string country;
        uint wintness_1_id;
        uint wintness_2_id;
        uint previous_owner;
        uint index_num;
    }

    LandStruct[] public landArr;
    function addLandRecode(
        string memory _plot_num,
        string memory _street_num,
        string memory _city,
        string memory _province,
        string memory _country,
        uint _wintness_1_id,
        uint _wintness_2_id,
        uint _previous_owner
    )public returns(uint)
    {
        uint index = landArr.length;
        landArr.push(LandStruct({
            plot_num: _plot_num,
            street_num: _street_num,
            city: _city,
            province: _province,
            country: _country,
            wintness_1_id: _wintness_1_id,
            wintness_2_id: _wintness_2_id,
            previous_owner: _previous_owner,
            index_num: index
        }));
    }
    function getLength() public view returns(uint){
        return landArr.length;
    }
}