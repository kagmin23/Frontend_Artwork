import React, { useState } from 'react';
import './Report.css';

const reportsData = [
  {
    id: 1,
    title: 'Báo cáo 1',
    author: 'Người Báo cáo 1',
    timestamp: '01-01-2024',
    thumbnail: 'url_to_thumbnail_1.jpg',
    content: 'Nội dung báo cáo 1...',
    attachments: [
      { id: 1, url: 'url_to_attachment_1.jpg' },
      { id: 2, url: 'url_to_attachment_2.jpg' },
    ],
  },
  // ...Thêm các report khác
];

export default function Report() {
  const [selectedReport, setSelectedReport] = useState(null);

  const onViewReport = (report) => {
    setSelectedReport(report);
  };

  const onCloseReportDetail = () => {
    setSelectedReport(null);
  };

  return (
    <div className="report-management">
      <section id="reports">
        <h2>Danh sách Report</h2>
        <ul>
          {reportsData.map((report) => (
            <li key={report.id}>
              <div className="thumbnail" onClick={() => onViewReport(report)}>
                <img src={report.thumbnail} alt={`Thumbnail ${report.title}`} />
              </div>
              <div className="info">
                <h3>{report.title}</h3>
                <p>{report.author}</p>
                <p>{report.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {selectedReport && (
        <section id="report-detail">
          <button onClick={onCloseReportDetail}>Đóng</button>
          <h2>{selectedReport.title}</h2>
          <p>{selectedReport.content}</p>
          <div className="attachments">
            {selectedReport.attachments.map((attachment) => (
              <img key={attachment.id} src={attachment.url} alt={`Attachment ${attachment.id}`} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

