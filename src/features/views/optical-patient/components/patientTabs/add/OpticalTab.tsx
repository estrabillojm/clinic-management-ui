import Input from "../../../../../components/shared/form/Input";
// import { useDispatch, useSelector } from "react-redux";
const OpticalTab = ({ selectedTab }: any) => {
  // const dispatch = useDispatch();

  const data = {
    opticOdSphere: "",
    opticOdCyclinder: "",
    opticOdAxis: "",
    opticOdAdd: "",
    opticOsSphere: "",
    opticOsCyclinder: "",
    opticOsAxis: "",
    opticOsAdd: "",
    opticType: "",
    opticCoatingInstrument: "",
    opticRemark: "",
    opticLens: "",
  };

  return (
    <>
      <div className={`${selectedTab === 2 ? "block" : "hidden"}`}>
        <div className="grid-span-12 gap-4 pb-2">
          <h3 className="text-primary font-semibold">Oculus Dexter (Right)</h3>
        </div>
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Sphere"
              fieldName="opticOdSphere"
              defaultValue={data.opticOdSphere}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Cyclinder"
              fieldName="opticOdCyclinder"
              defaultValue={data.opticOdCyclinder}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Axis"
              fieldName="opticOdAxis"
              defaultValue={data.opticOdAxis}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Add"
              fieldName="opticOdAdd"
              defaultValue={data.opticOdAdd}
            />
          </div>
        </div>

        <div className="grid-span-12 gap-4 pb-2">
          <h3 className="text-primary font-semibold">Oculus Sinister (Left)</h3>
        </div>
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Sphere"
              fieldName="opticOsSphere"
              defaultValue={data.opticOsSphere}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Cyclinder"
              fieldName="opticOsCyclinder"
              defaultValue={data.opticOsCyclinder}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Axis"
              fieldName="opticOsAxis"
              defaultValue={data.opticOsAxis}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Add"
              fieldName="opticOsAdd"
              defaultValue={data.opticOsAdd}
            />
          </div>
        </div>

        <div className="grid-span-12 gap-4 pb-2">
          <h3 className="text-primary font-semibold">Pupillary Distance</h3>
        </div>
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-3">
            <Input type="text" label="OD" fieldName="opticOdPupillary" />
          </div>
          <div className="col-span-3">
            <Input type="text" label="OS" fieldName="opticOsPupillary" />
          </div>
          <div className="col-span-3">
            <Input type="text" label="OU" fieldName="opticOuPupillary" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-8 pt-8 border-t">
          <div className="col-span-4">
            <Input type="opticType" label="Type" fieldName="opticType" />
          </div>
          <div className="col-span-4">
            <Input
              type="string"
              label="Coating Instrument"
              fieldName="opticCoatingInstrument"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-6">
            <Input
              type="string"
              label="Remarks"
              fieldName="opticRemark"
              defaultValue={data.opticRemark}
              isMultiline={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default OpticalTab;
