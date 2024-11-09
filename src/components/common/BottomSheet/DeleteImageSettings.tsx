import Button from "../Button";

interface DeleteImageSettingsProps {
  onClickCancle: () => void;
  onClickDelete: () => void;
  imgUrl: string;
}

const DeleteImageSettings = ({
  onClickCancle,
  onClickDelete,
  imgUrl,
}: DeleteImageSettingsProps) => {
  return (
    <div className="flex w-full flex-col gap-600 font-Binggrae text-body-2 font-regular text-gray-900">
      <img src={imgUrl} alt="" />
      <div className="text-heading-2 font-regular">
        이미지를 <span className="text-primary-medium">삭제</span>하시겠어요?
      </div>
      <div className="font-BinggraeBold text-body-1">일기 날짜</div>
      <div className="flex justify-between">
        <Button
          size="small"
          active={true}
          text="취소하기"
          onClickHandler={onClickCancle}
          bgColor="gray"
        />
        <Button
          size="small"
          active={true}
          text="삭제하기"
          onClickHandler={onClickDelete}
          bgColor="dark"
        />
      </div>
    </div>
  );
};

export default DeleteImageSettings;
