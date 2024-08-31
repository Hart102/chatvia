import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type ModalState = {
  isOpen: boolean;
  size:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "xs"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full"
    | undefined;
};

const ModalLayout = () => {
  const { isOpen, size } = useSelector(
    (state: RootState) => state.modal
  ) as ModalState;

  const { Template } = useSelector((state: RootState) => state.modal);

  return (
    <>
      <Modal
        size={size}
        isOpen={isOpen}
        className="py-8"
        classNames={{ closeButton: "hidden" }}
        scrollBehavior="outside"
      >
        <ModalContent>
          <>
            <ModalBody className="text-center">{Template}</ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLayout;
