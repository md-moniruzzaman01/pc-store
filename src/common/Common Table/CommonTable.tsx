/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { CommonTableProps } from "./config/types";
import {
  handleAllCheckboxChange,
  handleCheckboxChange,
} from "./Helpers/handleCheckbox";
import { IoMdEye } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import { icons } from "../../shared/libs/Icons";

const CommonTable: FC<CommonTableProps> = ({
  headerData,
  checkedRows,
  setCheckedRows,
  link,
  checkbox,
  productData,
  itemData = [],
  dataLayout,
  btnLink,
  btnValue,
  deleteBtn,
  deleteFn,
  editPageLink,
  modalFunction,
  loading,
  labelDeleteCondition = true,
  labelEditCondition = true,
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center py-8 ${
        itemData?.length && "pb-20"
      }`}
    >
      <div className="overflow-x-auto w-full bg-background rounded-lg">
        {loading ? (
          <>
            <div className="min-h-screen flex justify-center items-center">
              <p>loading...</p>
            </div>
          </>
        ) : itemData?.length > 0 ? (
          <table className="table-auto w-full text-center border-collapse bg-solidWhite dark:bg-shadeOfGray ">
            {/* Header */}
            <thead className="bg-lightGray dark:bg-lightGray/80  text-shadeOfGray text-xs">
              <tr>
                {checkbox && (
                  <th className="p-3">
                    <label>
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={checkedRows.length === itemData?.length}
                        onChange={() =>
                          handleAllCheckboxChange(
                            checkedRows,
                            setCheckedRows,
                            itemData,
                            productData
                          )
                        }
                      />
                    </label>
                  </th>
                )}
                {headerData?.map((title: string, index: number) => {
                  if (!labelDeleteCondition && title === "Delete") return null;
                  if (!labelEditCondition && title === "Edit") return null;
                  return (
                    <th key={index} className="p-3 font-semibold">
                      {title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            {/* Body */}
            <tbody className="text-gray-800 dark:text-solidWhite text-xs">
              {itemData.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="border-b dark:hover:bg-shadeOfOrange  hover:bg-lightGray transition-colors"
                >
                  {checkbox && (
                    <td className="p-3">
                      <label>
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-blue-600"
                          checked={checkedRows.includes(item?.id || item?._id)}
                          onChange={() =>
                            handleCheckboxChange(
                              item?.id || item?._id,
                              checkedRows,
                              setCheckedRows
                            )
                          }
                        />
                      </label>
                    </td>
                  )}
                  {dataLayout.map((layout, idx) => (
                    <td
                      key={idx}
                      className={`p-3 ${
                        item?.status?.name === "Open" && eval(layout) === "Open"
                          ? "text-shadeOfRed font-bold"
                          : ""
                      }`}
                    >
                      {(layout === "item?.products?.serial_number" ||
                        layout === "item?.serial_number") &&
                      link ? (
                        <NavLink
                          className="text-blue-600 hover:underline"
                          to={`${link}/${item?.id || item?._id}`}
                        >
                          {eval(layout)}
                        </NavLink>
                      ) : (
                        eval(layout) || (eval(layout) === 0 ? 0 : [])
                      )}
                    </td>
                  ))}
                  {btnLink && (
                    <td className="p-3">
                      <NavLink
                        className="text-solidWhite bg-blue-500 hover:bg-blue-600 rounded px-3 py-1 text-xs"
                        to={`${btnLink}/${item?.id}`}
                      >
                        {btnValue}
                      </NavLink>
                    </td>
                  )}
                  {deleteBtn && (
                    <td className="p-3">
                      <div
                        onClick={() => deleteFn(item?.id)}
                        className="text-red-600 hover:text-red-800 cursor-pointer text-xl"
                      >
                        {icons?.delete}
                      </div>
                    </td>
                  )}
                  {modalFunction && (
                    <td className="p-3">
                      <Button
                        disabled={item?.status?.id === 2}
                        mini
                        onClick={() => modalFunction(item?.id)}
                      >
                        <IoMdEye />
                      </Button>
                    </td>
                  )}
                  {link && (
                    <td className="p-3">
                      <NavLink
                        className="text-gray-600 dark:text-lightGray hover:text-blue-500 dark:hover:text-shadeOfGray"
                        to={`${link}/${item?.id}`}
                      >
                        <IoMdEye />
                      </NavLink>
                    </td>
                  )}
                  {editPageLink && (
                    <td className="p-3">
                      <NavLink
                        className="text-gray-600 dark:text-lightGray hover:text-blue-500 dark:hover:text-shadeOfGray"
                        to={`${editPageLink}/${
                          productData
                            ? item?.repair[item?.repair?.length - 1]?.id
                            : item?.id
                        }`}
                      >
                        <MdModeEdit />
                      </NavLink>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-500 text-lg py-10">
            Not Found found
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonTable;
