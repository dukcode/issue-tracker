import { ChangeEvent } from "react";

import icons from "Util/Icons";
import { StyledCommentBox, StyledUploadImg } from "./CommentBox.styled";

type TCommentBox = {
	value: string;
	handleChangeValue: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	handleChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
	fileName: string;
};

const { FilePresent } = icons;
const INPUT_COMMENTS = "코멘트를 입력하세요";

const CommentBox = ({ value, handleChangeValue, handleChangeFile, fileName }: TCommentBox) => {
	return (
		<StyledCommentBox>
			<textarea value={value} onChange={handleChangeValue} placeholder={INPUT_COMMENTS} />
			<input type="file" id="upload_img" onChange={handleChangeFile} />
			<StyledUploadImg htmlFor="upload_img">
				<FilePresent colorset="label" size={16} />
				{fileName}
			</StyledUploadImg>
		</StyledCommentBox>
	);
};

export default CommentBox;
