 CREATE TABLE [dbo].[Leave](
	[LeaveId] [int] IDENTITY(1,1) NOT NULL,
	[LeaveType] [varchar](250) NULL,
	[LeaveName] [varchar](250) NULL,
	[LeaveSurname] [varchar](250) NULL,
	[LeaveDate] Date NULL,
	[ReturnDate] Date NULL,

 CONSTRAINT [PK_Leave] PRIMARY KEY CLUSTERED 
(
	[LeaveId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


	Insert Into Leave values ('Annual','Bryon','Labuschagne','2022/04/10','2022/04/15' )