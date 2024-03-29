import "./Section.scss";
import InProgressCard from './InProgressCard';

function InProgressSection() {
  return (
    <div className="column">
     <div className="row"> <div className="inside"><h3>In Progress </h3><p>(3)</p> </div>
            <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" 
                xmlns="http://www.w3.org/2000/svg" >
                <title>E7C80950-64BC-4715-8278-D1DCE6D239CD</title>
                <g id="Zadatak-za-UI-i-FE-developera" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Kanban-" transform="translate(-248.000000, -32.000000)">
                        <g id="Column" transform="translate(10.000000, 32.000000)">
                            <g id="Column-Header" transform="translate(22.000000, 0.000000)">
                                <g id="Options-Icon-" transform="translate(216.000000, 0.000000)">
                                    <rect id="Rectangle" fill="#D8D8D8" opacity="0" x="0" y="0" width="20" height="20"></rect>
                                    <path d="M4,12.2105263 C5.1045695,12.2105263 6,11.2679679 6,10.1052632 C6,8.94255842 5.1045695,8 4,8 C2.8954305,8 2,8.94255842 2,10.1052632 C2,11.2679679 2.8954305,12.2105263 4,12.2105263 Z M10,12.2105263 C11.1045695,12.2105263 12,11.2679679 12,10.1052632 C12,8.94255842 11.1045695,8 10,8 C8.8954305,8 8,8.94255842 8,10.1052632 C8,11.2679679 8.8954305,12.2105263 10,12.2105263 Z M16,12.2105263 C17.1045695,12.2105263 18,11.2679679 18,10.1052632 C18,8.94255842 17.1045695,8 16,8 C14.8954305,8 14,8.94255842 14,10.1052632 C14,11.2679679 14.8954305,12.2105263 16,12.2105263 Z" id="3Dots" fill="#8E8E8E" fill-rule="nonzero"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
       <InProgressCard/>
      <a className="add">+ Add a Task</a>
    </div>
  );
}

export default InProgressSection;