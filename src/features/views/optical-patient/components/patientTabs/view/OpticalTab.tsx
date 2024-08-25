import Input from "../../../../../components/shared/form/Input";
// import { useDispatch, useSelector } from "react-redux";
const OpticalTab = ({ selectedTab, data }: any) => {
  // const dispatch = useDispatch();

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
              label="Diopter Sphere"
              fieldName="opticOdSphere"
              defaultValue={data.opticOdSphere}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="Diopter Cyclinder"
              fieldName="opticOdCyclinder"
              defaultValue={data.opticOdCyclinder}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="Axis"
              fieldName="opticOdAxis"
              defaultValue={data.opticOdAxis}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="Diopter Add"
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
              label="Diopter Sphere"
              fieldName="opticOsSphere"
              defaultValue={data.opticOsSphere}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="Diopter Cyclinder"
              fieldName="opticOsCyclinder"
              defaultValue={data.opticOsCyclinder}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="Diopter Axis"
              fieldName="opticOsAxis"
              defaultValue={data.opticOsAxis}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="Diopter Add"
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
            <Input
              type="text"
              label="OD"
              fieldName="opticOdPupillary"
              defaultValue={data.opticOdPupillary}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OS"
              fieldName="opticOsPupillary"
              defaultValue={data.opticOsPupillary}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OU"
              fieldName="opticOuPupillary"
              defaultValue={data.opticOuPupillary}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-8 pt-8 border-t">
          <div className="col-span-4">
            <Input
              type="opticType"
              label="Type"
              fieldName="opticType"
              defaultValue={data.opticType}
            />
          </div>
          <div className="col-span-4">
            <Input
              type="string"
              label="Coating Instrument"
              fieldName="opticCoatingInstrument"
              defaultValue={data.opticCoatingInstrument}
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
