pragma solidity >=0.4.22 <0.6.0;

contract Land {
    struct LandStruct {
        string plot_num;
        string city;
        string country;
        uint wintness_1_id;
        uint previous_owner;
        uint current_owner;
        uint index_num;
    }

    LandStruct[] public landArr;
    function addLandRecode(
        string memory _plot_num,
        string memory _city,
        string memory _country,
        uint _wintness_1_id,
        uint _previous_owner,
        uint _current_owner
    )public returns(uint)
    {
        uint index = landArr.length;
        landArr.push(LandStruct({
            plot_num: _plot_num,
            city: _city,
            country: _country,
            wintness_1_id: _wintness_1_id,
            previous_owner: _previous_owner,
            current_owner: _current_owner,
            index_num: index
        }));
    }
    function getLength() public view returns(uint) {
        return landArr.length;
    }
    function transferLandRecord(
        uint _index,
        uint _current_owner,
        uint _new_owner,
        uint _wintness_1_id
        ) public {
        require(landArr[_index].current_owner == _current_owner);
        landArr[_index].previous_owner = landArr[_index].current_owner;
        landArr[_index].current_owner = _new_owner;
        landArr[_index].wintness_1_id = _wintness_1_id;
    }
}