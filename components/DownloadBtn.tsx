"use client"

interface DownloadBtnProps {
    btnName: string;
    fileURL: string;
    dwnldName: string;
}

const DownloadButton: React.FC<DownloadBtnProps> = ({ btnName, fileURL, dwnldName }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = dwnldName;
        link.click();
    };

    return (
        <div>
            <button onClick={handleDownload}>{btnName}</button>
        </div>
    );
};

export default DownloadButton;