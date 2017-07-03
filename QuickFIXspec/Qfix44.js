module.exports = {
		"version": "FIX.4.4",
		"header": {
			"field": [
				{
					"name": "BeginString",
					"required": "Y"
				},
				{
					"name": "BodyLength",
					"required": "Y"
				},
				{
					"name": "MsgType",
					"required": "Y"
				},
				{
					"name": "SenderCompID",
					"required": "Y"
				},
				{
					"name": "TargetCompID",
					"required": "Y"
				},
				{
					"name": "OnBehalfOfCompID",
					"required": "N"
				},
				{
					"name": "DeliverToCompID",
					"required": "N"
				},
				{
					"name": "SecureDataLen",
					"required": "N"
				},
				{
					"name": "SecureData",
					"required": "N"
				},
				{
					"name": "MsgSeqNum",
					"required": "Y"
				},
				{
					"name": "SenderSubID",
					"required": "N"
				},
				{
					"name": "SenderLocationID",
					"required": "N"
				},
				{
					"name": "TargetSubID",
					"required": "N"
				},
				{
					"name": "TargetLocationID",
					"required": "N"
				},
				{
					"name": "OnBehalfOfSubID",
					"required": "N"
				},
				{
					"name": "OnBehalfOfLocationID",
					"required": "N"
				},
				{
					"name": "DeliverToSubID",
					"required": "N"
				},
				{
					"name": "DeliverToLocationID",
					"required": "N"
				},
				{
					"name": "PossDupFlag",
					"required": "N"
				},
				{
					"name": "PossResend",
					"required": "N"
				},
				{
					"name": "SendingTime",
					"required": "Y"
				},
				{
					"name": "OrigSendingTime",
					"required": "N"
				},
				{
					"name": "XmlDataLen",
					"required": "N"
				},
				{
					"name": "XmlData",
					"required": "N"
				},
				{
					"name": "MessageEncoding",
					"required": "N"
				},
				{
					"name": "LastMsgSeqNumProcessed",
					"required": "N"
				}
			],
			"component": {
				"name": "Hop",
				"required": "N"
			}
		},
		"messages": {
			"message": [
				{
					"field": {
						"name": "TestReqID",
						"required": "N"
					},
					"name": "Heartbeat",
					"msgtype": "0",
					"msgcat": "admin"
				},
				{
					"field": {
						"name": "TestReqID",
						"required": "Y"
					},
					"name": "TestRequest",
					"msgtype": "1",
					"msgcat": "admin"
				},
				{
					"field": [
						{
							"name": "BeginSeqNo",
							"required": "Y"
						},
						{
							"name": "EndSeqNo",
							"required": "Y"
						}
					],
					"name": "ResendRequest",
					"msgtype": "2",
					"msgcat": "admin"
				},
				{
					"field": [
						{
							"name": "RefSeqNum",
							"required": "Y"
						},
						{
							"name": "RefTagID",
							"required": "N"
						},
						{
							"name": "RefMsgType",
							"required": "N"
						},
						{
							"name": "SessionRejectReason",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"name": "Reject",
					"msgtype": "3",
					"msgcat": "admin"
				},
				{
					"field": [
						{
							"name": "GapFillFlag",
							"required": "N"
						},
						{
							"name": "NewSeqNo",
							"required": "Y"
						}
					],
					"name": "SequenceReset",
					"msgtype": "4",
					"msgcat": "admin"
				},
				{
					"field": [
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"name": "Logout",
					"msgtype": "5",
					"msgcat": "admin"
				},
				{
					"field": [
						{
							"name": "IOIID",
							"required": "Y"
						},
						{
							"name": "IOITransType",
							"required": "Y"
						},
						{
							"name": "IOIRefID",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "IOIQty",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "ValidUntilTime",
							"required": "N"
						},
						{
							"name": "IOIQltyInd",
							"required": "N"
						},
						{
							"name": "IOINaturalFlag",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "URLLink",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "OrderQtyData",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "InstrmtLegIOIGrp",
							"required": "N"
						},
						{
							"name": "IOIQualGrp",
							"required": "N"
						},
						{
							"name": "RoutingGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						}
					],
					"name": "IOI",
					"msgtype": "6",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "AdvId",
							"required": "Y"
						},
						{
							"name": "AdvTransType",
							"required": "Y"
						},
						{
							"name": "AdvRefID",
							"required": "N"
						},
						{
							"name": "AdvSide",
							"required": "Y"
						},
						{
							"name": "Quantity",
							"required": "Y"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "URLLink",
							"required": "N"
						},
						{
							"name": "LastMkt",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						}
					],
					"name": "Advertisement",
					"msgtype": "7",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "OrderID",
							"required": "Y"
						},
						{
							"name": "SecondaryOrderID",
							"required": "N"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "SecondaryExecID",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "OrigClOrdID",
							"required": "N"
						},
						{
							"name": "ClOrdLinkID",
							"required": "N"
						},
						{
							"name": "QuoteRespID",
							"required": "N"
						},
						{
							"name": "OrdStatusReqID",
							"required": "N"
						},
						{
							"name": "MassStatusReqID",
							"required": "N"
						},
						{
							"name": "TotNumReports",
							"required": "N"
						},
						{
							"name": "LastRptRequested",
							"required": "N"
						},
						{
							"name": "TradeOriginationDate",
							"required": "N"
						},
						{
							"name": "ListID",
							"required": "N"
						},
						{
							"name": "CrossID",
							"required": "N"
						},
						{
							"name": "OrigCrossID",
							"required": "N"
						},
						{
							"name": "CrossType",
							"required": "N"
						},
						{
							"name": "ExecID",
							"required": "Y"
						},
						{
							"name": "ExecRefID",
							"required": "N"
						},
						{
							"name": "ExecType",
							"required": "Y"
						},
						{
							"name": "OrdStatus",
							"required": "Y"
						},
						{
							"name": "WorkingIndicator",
							"required": "N"
						},
						{
							"name": "OrdRejReason",
							"required": "N"
						},
						{
							"name": "ExecRestatementReason",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "DayBookingInst",
							"required": "N"
						},
						{
							"name": "BookingUnit",
							"required": "N"
						},
						{
							"name": "PreallocMethod",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "CashMargin",
							"required": "N"
						},
						{
							"name": "ClearingFeeIndicator",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "OrdType",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "StopPx",
							"required": "N"
						},
						{
							"name": "PeggedPrice",
							"required": "N"
						},
						{
							"name": "DiscretionPrice",
							"required": "N"
						},
						{
							"name": "TargetStrategy",
							"required": "N"
						},
						{
							"name": "TargetStrategyParameters",
							"required": "N"
						},
						{
							"name": "ParticipationRate",
							"required": "N"
						},
						{
							"name": "TargetStrategyPerformance",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "ComplianceID",
							"required": "N"
						},
						{
							"name": "SolicitedFlag",
							"required": "N"
						},
						{
							"name": "TimeInForce",
							"required": "N"
						},
						{
							"name": "EffectiveTime",
							"required": "N"
						},
						{
							"name": "ExpireDate",
							"required": "N"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "ExecInst",
							"required": "N"
						},
						{
							"name": "OrderCapacity",
							"required": "N"
						},
						{
							"name": "OrderRestrictions",
							"required": "N"
						},
						{
							"name": "CustOrderCapacity",
							"required": "N"
						},
						{
							"name": "LastQty",
							"required": "N"
						},
						{
							"name": "UnderlyingLastQty",
							"required": "N"
						},
						{
							"name": "LastPx",
							"required": "N"
						},
						{
							"name": "UnderlyingLastPx",
							"required": "N"
						},
						{
							"name": "LastParPx",
							"required": "N"
						},
						{
							"name": "LastSpotRate",
							"required": "N"
						},
						{
							"name": "LastForwardPoints",
							"required": "N"
						},
						{
							"name": "LastMkt",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "TimeBracket",
							"required": "N"
						},
						{
							"name": "LastCapacity",
							"required": "N"
						},
						{
							"name": "LeavesQty",
							"required": "Y"
						},
						{
							"name": "CumQty",
							"required": "Y"
						},
						{
							"name": "AvgPx",
							"required": "Y"
						},
						{
							"name": "DayOrderQty",
							"required": "N"
						},
						{
							"name": "DayCumQty",
							"required": "N"
						},
						{
							"name": "DayAvgPx",
							"required": "N"
						},
						{
							"name": "GTBookingInst",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "ReportToExch",
							"required": "N"
						},
						{
							"name": "GrossTradeAmt",
							"required": "N"
						},
						{
							"name": "NumDaysInterest",
							"required": "N"
						},
						{
							"name": "ExDate",
							"required": "N"
						},
						{
							"name": "AccruedInterestRate",
							"required": "N"
						},
						{
							"name": "AccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "InterestAtMaturity",
							"required": "N"
						},
						{
							"name": "EndAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "StartCash",
							"required": "N"
						},
						{
							"name": "EndCash",
							"required": "N"
						},
						{
							"name": "TradedFlatSwitch",
							"required": "N"
						},
						{
							"name": "BasisFeatureDate",
							"required": "N"
						},
						{
							"name": "BasisFeaturePrice",
							"required": "N"
						},
						{
							"name": "Concession",
							"required": "N"
						},
						{
							"name": "TotalTakedown",
							"required": "N"
						},
						{
							"name": "NetMoney",
							"required": "N"
						},
						{
							"name": "SettlCurrAmt",
							"required": "N"
						},
						{
							"name": "SettlCurrency",
							"required": "N"
						},
						{
							"name": "SettlCurrFxRate",
							"required": "N"
						},
						{
							"name": "SettlCurrFxRateCalc",
							"required": "N"
						},
						{
							"name": "HandlInst",
							"required": "N"
						},
						{
							"name": "MinQty",
							"required": "N"
						},
						{
							"name": "MaxFloor",
							"required": "N"
						},
						{
							"name": "PositionEffect",
							"required": "N"
						},
						{
							"name": "MaxShow",
							"required": "N"
						},
						{
							"name": "BookingType",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "SettlDate2",
							"required": "N"
						},
						{
							"name": "OrderQty2",
							"required": "N"
						},
						{
							"name": "LastForwardPoints2",
							"required": "N"
						},
						{
							"name": "MultiLegReportingType",
							"required": "N"
						},
						{
							"name": "CancellationRights",
							"required": "N"
						},
						{
							"name": "MoneyLaunderingStatus",
							"required": "N"
						},
						{
							"name": "RegistID",
							"required": "N"
						},
						{
							"name": "Designation",
							"required": "N"
						},
						{
							"name": "TransBkdTime",
							"required": "N"
						},
						{
							"name": "ExecValuationPoint",
							"required": "N"
						},
						{
							"name": "ExecPriceType",
							"required": "N"
						},
						{
							"name": "ExecPriceAdjustment",
							"required": "N"
						},
						{
							"name": "PriorityIndicator",
							"required": "N"
						},
						{
							"name": "PriceImprovement",
							"required": "N"
						},
						{
							"name": "LastLiquidityInd",
							"required": "N"
						},
						{
							"name": "CopyMsgIndicator",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "ContraGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "OrderQtyData",
							"required": "N"
						},
						{
							"name": "PegInstructions",
							"required": "N"
						},
						{
							"name": "DiscretionInstructions",
							"required": "N"
						},
						{
							"name": "CommissionData",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						},
						{
							"name": "ContAmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegExecGrp",
							"required": "N"
						},
						{
							"name": "MiscFeesGrp",
							"required": "N"
						}
					],
					"name": "ExecutionReport",
					"msgtype": "8",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "OrderID",
							"required": "Y"
						},
						{
							"name": "SecondaryOrderID",
							"required": "N"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "Y"
						},
						{
							"name": "ClOrdLinkID",
							"required": "N"
						},
						{
							"name": "OrigClOrdID",
							"required": "Y"
						},
						{
							"name": "OrdStatus",
							"required": "Y"
						},
						{
							"name": "WorkingIndicator",
							"required": "N"
						},
						{
							"name": "OrigOrdModTime",
							"required": "N"
						},
						{
							"name": "ListID",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "TradeOriginationDate",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "CxlRejResponseTo",
							"required": "Y"
						},
						{
							"name": "CxlRejReason",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"name": "OrderCancelReject",
					"msgtype": "9",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "EncryptMethod",
							"required": "Y"
						},
						{
							"name": "HeartBtInt",
							"required": "Y"
						},
						{
							"name": "RawDataLength",
							"required": "N"
						},
						{
							"name": "RawData",
							"required": "N"
						},
						{
							"name": "ResetSeqNumFlag",
							"required": "N"
						},
						{
							"name": "NextExpectedMsgSeqNum",
							"required": "N"
						},
						{
							"name": "MaxMessageSize",
							"required": "N"
						},
						{
							"name": "TestMessageIndicator",
							"required": "N"
						},
						{
							"name": "Username",
							"required": "N"
						},
						{
							"name": "Password",
							"required": "N"
						}
					],
					"group": {
						"field": [
							{
								"name": "RefMsgType",
								"required": "N"
							},
							{
								"name": "MsgDirection",
								"required": "N"
							}
						],
						"name": "NoMsgTypes",
						"required": "N"
					},
					"name": "Logon",
					"msgtype": "A",
					"msgcat": "admin"
				},
				{
					"field": [
						{
							"name": "OrigTime",
							"required": "N"
						},
						{
							"name": "Urgency",
							"required": "N"
						},
						{
							"name": "Headline",
							"required": "Y"
						},
						{
							"name": "EncodedHeadlineLen",
							"required": "N"
						},
						{
							"name": "EncodedHeadline",
							"required": "N"
						},
						{
							"name": "URLLink",
							"required": "N"
						},
						{
							"name": "RawDataLength",
							"required": "N"
						},
						{
							"name": "RawData",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "RoutingGrp",
							"required": "N"
						},
						{
							"name": "InstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "LinesOfTextGrp",
							"required": "Y"
						}
					],
					"name": "News",
					"msgtype": "B",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "EmailThreadID",
							"required": "Y"
						},
						{
							"name": "EmailType",
							"required": "Y"
						},
						{
							"name": "OrigTime",
							"required": "N"
						},
						{
							"name": "Subject",
							"required": "Y"
						},
						{
							"name": "EncodedSubjectLen",
							"required": "N"
						},
						{
							"name": "EncodedSubject",
							"required": "N"
						},
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "RawDataLength",
							"required": "N"
						},
						{
							"name": "RawData",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "RoutingGrp",
							"required": "N"
						},
						{
							"name": "InstrmtGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "LinesOfTextGrp",
							"required": "Y"
						}
					],
					"name": "Email",
					"msgtype": "C",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ClOrdID",
							"required": "Y"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "ClOrdLinkID",
							"required": "N"
						},
						{
							"name": "TradeOriginationDate",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "DayBookingInst",
							"required": "N"
						},
						{
							"name": "BookingUnit",
							"required": "N"
						},
						{
							"name": "PreallocMethod",
							"required": "N"
						},
						{
							"name": "AllocID",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "CashMargin",
							"required": "N"
						},
						{
							"name": "ClearingFeeIndicator",
							"required": "N"
						},
						{
							"name": "HandlInst",
							"required": "N"
						},
						{
							"name": "ExecInst",
							"required": "N"
						},
						{
							"name": "MinQty",
							"required": "N"
						},
						{
							"name": "MaxFloor",
							"required": "N"
						},
						{
							"name": "ExDestination",
							"required": "N"
						},
						{
							"name": "ProcessCode",
							"required": "N"
						},
						{
							"name": "PrevClosePx",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "LocateReqd",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "OrdType",
							"required": "Y"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "StopPx",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "ComplianceID",
							"required": "N"
						},
						{
							"name": "SolicitedFlag",
							"required": "N"
						},
						{
							"name": "IOIID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "N"
						},
						{
							"name": "TimeInForce",
							"required": "N"
						},
						{
							"name": "EffectiveTime",
							"required": "N"
						},
						{
							"name": "ExpireDate",
							"required": "N"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "GTBookingInst",
							"required": "N"
						},
						{
							"name": "OrderCapacity",
							"required": "N"
						},
						{
							"name": "OrderRestrictions",
							"required": "N"
						},
						{
							"name": "CustOrderCapacity",
							"required": "N"
						},
						{
							"name": "ForexReq",
							"required": "N"
						},
						{
							"name": "SettlCurrency",
							"required": "N"
						},
						{
							"name": "BookingType",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "SettlDate2",
							"required": "N"
						},
						{
							"name": "OrderQty2",
							"required": "N"
						},
						{
							"name": "Price2",
							"required": "N"
						},
						{
							"name": "PositionEffect",
							"required": "N"
						},
						{
							"name": "CoveredOrUncovered",
							"required": "N"
						},
						{
							"name": "MaxShow",
							"required": "N"
						},
						{
							"name": "TargetStrategy",
							"required": "N"
						},
						{
							"name": "TargetStrategyParameters",
							"required": "N"
						},
						{
							"name": "ParticipationRate",
							"required": "N"
						},
						{
							"name": "CancellationRights",
							"required": "N"
						},
						{
							"name": "MoneyLaunderingStatus",
							"required": "N"
						},
						{
							"name": "RegistID",
							"required": "N"
						},
						{
							"name": "Designation",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "PreAllocGrp",
							"required": "N"
						},
						{
							"name": "TrdgSesGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "OrderQtyData",
							"required": "Y"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						},
						{
							"name": "CommissionData",
							"required": "N"
						},
						{
							"name": "PegInstructions",
							"required": "N"
						},
						{
							"name": "DiscretionInstructions",
							"required": "N"
						}
					],
					"name": "NewOrderSingle",
					"msgtype": "D",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ListID",
							"required": "Y"
						},
						{
							"name": "BidID",
							"required": "N"
						},
						{
							"name": "ClientBidID",
							"required": "N"
						},
						{
							"name": "ProgRptReqs",
							"required": "N"
						},
						{
							"name": "BidType",
							"required": "Y"
						},
						{
							"name": "ProgPeriodInterval",
							"required": "N"
						},
						{
							"name": "CancellationRights",
							"required": "N"
						},
						{
							"name": "MoneyLaunderingStatus",
							"required": "N"
						},
						{
							"name": "RegistID",
							"required": "N"
						},
						{
							"name": "ListExecInstType",
							"required": "N"
						},
						{
							"name": "ListExecInst",
							"required": "N"
						},
						{
							"name": "EncodedListExecInstLen",
							"required": "N"
						},
						{
							"name": "EncodedListExecInst",
							"required": "N"
						},
						{
							"name": "AllowableOneSidednessPct",
							"required": "N"
						},
						{
							"name": "AllowableOneSidednessValue",
							"required": "N"
						},
						{
							"name": "AllowableOneSidednessCurr",
							"required": "N"
						},
						{
							"name": "TotNoOrders",
							"required": "Y"
						},
						{
							"name": "LastFragment",
							"required": "N"
						}
					],
					"component": {
						"name": "ListOrdGrp",
						"required": "Y"
					},
					"name": "NewOrderList",
					"msgtype": "E",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "OrigClOrdID",
							"required": "Y"
						},
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "Y"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "ClOrdLinkID",
							"required": "N"
						},
						{
							"name": "ListID",
							"required": "N"
						},
						{
							"name": "OrigOrdModTime",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "ComplianceID",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "OrderQtyData",
							"required": "Y"
						}
					],
					"name": "OrderCancelRequest",
					"msgtype": "F",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "TradeOriginationDate",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "OrigClOrdID",
							"required": "Y"
						},
						{
							"name": "ClOrdID",
							"required": "Y"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "ClOrdLinkID",
							"required": "N"
						},
						{
							"name": "ListID",
							"required": "N"
						},
						{
							"name": "OrigOrdModTime",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "DayBookingInst",
							"required": "N"
						},
						{
							"name": "BookingUnit",
							"required": "N"
						},
						{
							"name": "PreallocMethod",
							"required": "N"
						},
						{
							"name": "AllocID",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "CashMargin",
							"required": "N"
						},
						{
							"name": "ClearingFeeIndicator",
							"required": "N"
						},
						{
							"name": "HandlInst",
							"required": "N"
						},
						{
							"name": "ExecInst",
							"required": "N"
						},
						{
							"name": "MinQty",
							"required": "N"
						},
						{
							"name": "MaxFloor",
							"required": "N"
						},
						{
							"name": "ExDestination",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "OrdType",
							"required": "Y"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "StopPx",
							"required": "N"
						},
						{
							"name": "TargetStrategy",
							"required": "N"
						},
						{
							"name": "TargetStrategyParameters",
							"required": "N"
						},
						{
							"name": "ParticipationRate",
							"required": "N"
						},
						{
							"name": "ComplianceID",
							"required": "N"
						},
						{
							"name": "SolicitedFlag",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "TimeInForce",
							"required": "N"
						},
						{
							"name": "EffectiveTime",
							"required": "N"
						},
						{
							"name": "ExpireDate",
							"required": "N"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "GTBookingInst",
							"required": "N"
						},
						{
							"name": "OrderCapacity",
							"required": "N"
						},
						{
							"name": "OrderRestrictions",
							"required": "N"
						},
						{
							"name": "CustOrderCapacity",
							"required": "N"
						},
						{
							"name": "ForexReq",
							"required": "N"
						},
						{
							"name": "SettlCurrency",
							"required": "N"
						},
						{
							"name": "BookingType",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "SettlDate2",
							"required": "N"
						},
						{
							"name": "OrderQty2",
							"required": "N"
						},
						{
							"name": "Price2",
							"required": "N"
						},
						{
							"name": "PositionEffect",
							"required": "N"
						},
						{
							"name": "CoveredOrUncovered",
							"required": "N"
						},
						{
							"name": "MaxShow",
							"required": "N"
						},
						{
							"name": "LocateReqd",
							"required": "N"
						},
						{
							"name": "CancellationRights",
							"required": "N"
						},
						{
							"name": "MoneyLaunderingStatus",
							"required": "N"
						},
						{
							"name": "RegistID",
							"required": "N"
						},
						{
							"name": "Designation",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "PreAllocGrp",
							"required": "N"
						},
						{
							"name": "TrdgSesGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "OrderQtyData",
							"required": "Y"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						},
						{
							"name": "PegInstructions",
							"required": "N"
						},
						{
							"name": "DiscretionInstructions",
							"required": "N"
						},
						{
							"name": "CommissionData",
							"required": "N"
						}
					],
					"name": "OrderCancelReplaceRequest",
					"msgtype": "G",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "Y"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "ClOrdLinkID",
							"required": "N"
						},
						{
							"name": "OrdStatusReqID",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						}
					],
					"name": "OrderStatusRequest",
					"msgtype": "H",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "AllocID",
							"required": "Y"
						},
						{
							"name": "AllocTransType",
							"required": "Y"
						},
						{
							"name": "AllocType",
							"required": "Y"
						},
						{
							"name": "SecondaryAllocID",
							"required": "N"
						},
						{
							"name": "RefAllocID",
							"required": "N"
						},
						{
							"name": "AllocCancReplaceReason",
							"required": "N"
						},
						{
							"name": "AllocIntermedReqType",
							"required": "N"
						},
						{
							"name": "AllocLinkID",
							"required": "N"
						},
						{
							"name": "AllocLinkType",
							"required": "N"
						},
						{
							"name": "BookingRefID",
							"required": "N"
						},
						{
							"name": "AllocNoOrdersType",
							"required": "Y"
						},
						{
							"name": "PreviouslyReported",
							"required": "N"
						},
						{
							"name": "ReversalIndicator",
							"required": "N"
						},
						{
							"name": "MatchType",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "Quantity",
							"required": "Y"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "LastMkt",
							"required": "N"
						},
						{
							"name": "TradeOriginationDate",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "AvgPx",
							"required": "Y"
						},
						{
							"name": "AvgParPx",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "AvgPxPrecision",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "Y"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "BookingType",
							"required": "N"
						},
						{
							"name": "GrossTradeAmt",
							"required": "N"
						},
						{
							"name": "Concession",
							"required": "N"
						},
						{
							"name": "TotalTakedown",
							"required": "N"
						},
						{
							"name": "NetMoney",
							"required": "N"
						},
						{
							"name": "PositionEffect",
							"required": "N"
						},
						{
							"name": "AutoAcceptIndicator",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "NumDaysInterest",
							"required": "N"
						},
						{
							"name": "AccruedInterestRate",
							"required": "N"
						},
						{
							"name": "AccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "TotalAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "InterestAtMaturity",
							"required": "N"
						},
						{
							"name": "EndAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "StartCash",
							"required": "N"
						},
						{
							"name": "EndCash",
							"required": "N"
						},
						{
							"name": "LegalConfirm",
							"required": "N"
						},
						{
							"name": "TotNoAllocs",
							"required": "N"
						},
						{
							"name": "LastFragment",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "OrdAllocGrp",
							"required": "N"
						},
						{
							"name": "ExecAllocGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "InstrumentExtension",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						},
						{
							"name": "AllocGrp",
							"required": "N"
						}
					],
					"name": "AllocationInstruction",
					"msgtype": "J",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ListID",
							"required": "Y"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "TradeOriginationDate",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"name": "ListCancelRequest",
					"msgtype": "K",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ListID",
							"required": "Y"
						},
						{
							"name": "ClientBidID",
							"required": "N"
						},
						{
							"name": "BidID",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"name": "ListExecute",
					"msgtype": "L",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ListID",
							"required": "Y"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"name": "ListStatusRequest",
					"msgtype": "M",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ListID",
							"required": "Y"
						},
						{
							"name": "ListStatusType",
							"required": "Y"
						},
						{
							"name": "NoRpts",
							"required": "Y"
						},
						{
							"name": "ListOrderStatus",
							"required": "Y"
						},
						{
							"name": "RptSeq",
							"required": "Y"
						},
						{
							"name": "ListStatusText",
							"required": "N"
						},
						{
							"name": "EncodedListStatusTextLen",
							"required": "N"
						},
						{
							"name": "EncodedListStatusText",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "TotNoOrders",
							"required": "Y"
						},
						{
							"name": "LastFragment",
							"required": "N"
						}
					],
					"component": {
						"name": "OrdListStatGrp",
						"required": "Y"
					},
					"name": "ListStatus",
					"msgtype": "N",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "AllocID",
							"required": "Y"
						},
						{
							"name": "SecondaryAllocID",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "AllocStatus",
							"required": "Y"
						},
						{
							"name": "AllocRejCode",
							"required": "N"
						},
						{
							"name": "AllocType",
							"required": "N"
						},
						{
							"name": "AllocIntermedReqType",
							"required": "N"
						},
						{
							"name": "MatchStatus",
							"required": "N"
						},
						{
							"name": "Product",
							"required": "N"
						},
						{
							"name": "SecurityType",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "AllocAckGrp",
							"required": "N"
						}
					],
					"name": "AllocationInstructionAck",
					"msgtype": "P",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "OrderID",
							"required": "Y"
						},
						{
							"name": "SecondaryOrderID",
							"required": "N"
						},
						{
							"name": "ExecID",
							"required": "Y"
						},
						{
							"name": "DKReason",
							"required": "Y"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "LastQty",
							"required": "N"
						},
						{
							"name": "LastPx",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "OrderQtyData",
							"required": "Y"
						}
					],
					"name": "DontKnowTrade",
					"msgtype": "Q",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "QuoteReqID",
							"required": "Y"
						},
						{
							"name": "RFQReqID",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "OrderCapacity",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": {
						"name": "QuotReqGrp",
						"required": "Y"
					},
					"name": "QuoteRequest",
					"msgtype": "R",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "QuoteReqID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "Y"
						},
						{
							"name": "QuoteRespID",
							"required": "N"
						},
						{
							"name": "QuoteType",
							"required": "N"
						},
						{
							"name": "QuoteResponseLevel",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "SettlDate2",
							"required": "N"
						},
						{
							"name": "OrderQty2",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "BidPx",
							"required": "N"
						},
						{
							"name": "OfferPx",
							"required": "N"
						},
						{
							"name": "MktBidPx",
							"required": "N"
						},
						{
							"name": "MktOfferPx",
							"required": "N"
						},
						{
							"name": "MinBidSize",
							"required": "N"
						},
						{
							"name": "BidSize",
							"required": "N"
						},
						{
							"name": "MinOfferSize",
							"required": "N"
						},
						{
							"name": "OfferSize",
							"required": "N"
						},
						{
							"name": "ValidUntilTime",
							"required": "N"
						},
						{
							"name": "BidSpotRate",
							"required": "N"
						},
						{
							"name": "OfferSpotRate",
							"required": "N"
						},
						{
							"name": "BidForwardPoints",
							"required": "N"
						},
						{
							"name": "OfferForwardPoints",
							"required": "N"
						},
						{
							"name": "MidPx",
							"required": "N"
						},
						{
							"name": "BidYield",
							"required": "N"
						},
						{
							"name": "MidYield",
							"required": "N"
						},
						{
							"name": "OfferYield",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "OrdType",
							"required": "N"
						},
						{
							"name": "BidForwardPoints2",
							"required": "N"
						},
						{
							"name": "OfferForwardPoints2",
							"required": "N"
						},
						{
							"name": "SettlCurrBidFxRate",
							"required": "N"
						},
						{
							"name": "SettlCurrOfferFxRate",
							"required": "N"
						},
						{
							"name": "SettlCurrFxRateCalc",
							"required": "N"
						},
						{
							"name": "CommType",
							"required": "N"
						},
						{
							"name": "Commission",
							"required": "N"
						},
						{
							"name": "CustOrderCapacity",
							"required": "N"
						},
						{
							"name": "ExDestination",
							"required": "N"
						},
						{
							"name": "OrderCapacity",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "QuotQualGrp",
							"required": "N"
						},
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "OrderQtyData",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "LegQuotGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						}
					],
					"name": "Quote",
					"msgtype": "S",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SettlInstMsgID",
							"required": "Y"
						},
						{
							"name": "SettlInstReqID",
							"required": "N"
						},
						{
							"name": "SettlInstMode",
							"required": "Y"
						},
						{
							"name": "SettlInstReqRejCode",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						}
					],
					"component": {
						"name": "SettlInstGrp",
						"required": "N"
					},
					"name": "SettlementInstructions",
					"msgtype": "T",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "MDReqID",
							"required": "Y"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "Y"
						},
						{
							"name": "MarketDepth",
							"required": "Y"
						},
						{
							"name": "MDUpdateType",
							"required": "N"
						},
						{
							"name": "AggregatedBook",
							"required": "N"
						},
						{
							"name": "OpenCloseSettlFlag",
							"required": "N"
						},
						{
							"name": "Scope",
							"required": "N"
						},
						{
							"name": "MDImplicitDelete",
							"required": "N"
						},
						{
							"name": "ApplQueueAction",
							"required": "N"
						},
						{
							"name": "ApplQueueMax",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "MDReqGrp",
							"required": "Y"
						},
						{
							"name": "InstrmtMDReqGrp",
							"required": "Y"
						},
						{
							"name": "TrdgSesGrp",
							"required": "N"
						}
					],
					"name": "MarketDataRequest",
					"msgtype": "V",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "MDReqID",
							"required": "N"
						},
						{
							"name": "FinancialStatus",
							"required": "N"
						},
						{
							"name": "CorporateAction",
							"required": "N"
						},
						{
							"name": "NetChgPrevDay",
							"required": "N"
						},
						{
							"name": "ApplQueueDepth",
							"required": "N"
						},
						{
							"name": "ApplQueueResolution",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "MDFullGrp",
							"required": "Y"
						}
					],
					"name": "MarketDataSnapshotFullRefresh",
					"msgtype": "W",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "MDReqID",
							"required": "N"
						},
						{
							"name": "ApplQueueDepth",
							"required": "N"
						},
						{
							"name": "ApplQueueResolution",
							"required": "N"
						}
					],
					"component": {
						"name": "MDIncGrp",
						"required": "Y"
					},
					"name": "MarketDataIncrementalRefresh",
					"msgtype": "X",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "MDReqID",
							"required": "Y"
						},
						{
							"name": "MDReqRejReason",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": {
						"name": "MDRjctGrp",
						"required": "N"
					},
					"name": "MarketDataRequestReject",
					"msgtype": "Y",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "QuoteReqID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "Y"
						},
						{
							"name": "QuoteCancelType",
							"required": "Y"
						},
						{
							"name": "QuoteResponseLevel",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "QuotCxlEntriesGrp",
							"required": "N"
						}
					],
					"name": "QuoteCancel",
					"msgtype": "Z",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "QuoteStatusReqID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "Parties",
							"required": "N"
						}
					],
					"name": "QuoteStatusRequest",
					"msgtype": "a",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "QuoteReqID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "N"
						},
						{
							"name": "QuoteStatus",
							"required": "Y"
						},
						{
							"name": "QuoteRejectReason",
							"required": "N"
						},
						{
							"name": "QuoteResponseLevel",
							"required": "N"
						},
						{
							"name": "QuoteType",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "QuotSetAckGrp",
							"required": "N"
						}
					],
					"name": "MassQuoteAcknowledgement",
					"msgtype": "b",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SecurityReqID",
							"required": "Y"
						},
						{
							"name": "SecurityRequestType",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "ExpirationCycle",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "InstrumentExtension",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						}
					],
					"name": "SecurityDefinitionRequest",
					"msgtype": "c",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SecurityReqID",
							"required": "Y"
						},
						{
							"name": "SecurityResponseID",
							"required": "Y"
						},
						{
							"name": "SecurityResponseType",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "ExpirationCycle",
							"required": "N"
						},
						{
							"name": "RoundLot",
							"required": "N"
						},
						{
							"name": "MinTradeVol",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "InstrumentExtension",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						}
					],
					"name": "SecurityDefinition",
					"msgtype": "d",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SecurityStatusReqID",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "Y"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "InstrumentExtension",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						}
					],
					"name": "SecurityStatusRequest",
					"msgtype": "e",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SecurityStatusReqID",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "UnsolicitedIndicator",
							"required": "N"
						},
						{
							"name": "SecurityTradingStatus",
							"required": "N"
						},
						{
							"name": "FinancialStatus",
							"required": "N"
						},
						{
							"name": "CorporateAction",
							"required": "N"
						},
						{
							"name": "HaltReasonChar",
							"required": "N"
						},
						{
							"name": "InViewOfCommon",
							"required": "N"
						},
						{
							"name": "DueToRelated",
							"required": "N"
						},
						{
							"name": "BuyVolume",
							"required": "N"
						},
						{
							"name": "SellVolume",
							"required": "N"
						},
						{
							"name": "HighPx",
							"required": "N"
						},
						{
							"name": "LowPx",
							"required": "N"
						},
						{
							"name": "LastPx",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "Adjustment",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "InstrumentExtension",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						}
					],
					"name": "SecurityStatus",
					"msgtype": "f",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "TradSesReqID",
							"required": "Y"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "TradSesMethod",
							"required": "N"
						},
						{
							"name": "TradSesMode",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "Y"
						}
					],
					"name": "TradingSessionStatusRequest",
					"msgtype": "g",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "TradSesReqID",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "Y"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "TradSesMethod",
							"required": "N"
						},
						{
							"name": "TradSesMode",
							"required": "N"
						},
						{
							"name": "UnsolicitedIndicator",
							"required": "N"
						},
						{
							"name": "TradSesStatus",
							"required": "Y"
						},
						{
							"name": "TradSesStatusRejReason",
							"required": "N"
						},
						{
							"name": "TradSesStartTime",
							"required": "N"
						},
						{
							"name": "TradSesOpenTime",
							"required": "N"
						},
						{
							"name": "TradSesPreCloseTime",
							"required": "N"
						},
						{
							"name": "TradSesCloseTime",
							"required": "N"
						},
						{
							"name": "TradSesEndTime",
							"required": "N"
						},
						{
							"name": "TotalVolumeTraded",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"name": "TradingSessionStatus",
					"msgtype": "h",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "QuoteReqID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "Y"
						},
						{
							"name": "QuoteType",
							"required": "N"
						},
						{
							"name": "QuoteResponseLevel",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "DefBidSize",
							"required": "N"
						},
						{
							"name": "DefOfferSize",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "QuotSetGrp",
							"required": "Y"
						}
					],
					"name": "MassQuote",
					"msgtype": "i",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "RefSeqNum",
							"required": "N"
						},
						{
							"name": "RefMsgType",
							"required": "Y"
						},
						{
							"name": "BusinessRejectRefID",
							"required": "N"
						},
						{
							"name": "BusinessRejectReason",
							"required": "Y"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"name": "BusinessMessageReject",
					"msgtype": "j",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "BidID",
							"required": "N"
						},
						{
							"name": "ClientBidID",
							"required": "Y"
						},
						{
							"name": "BidRequestTransType",
							"required": "Y"
						},
						{
							"name": "ListName",
							"required": "N"
						},
						{
							"name": "TotNoRelatedSym",
							"required": "Y"
						},
						{
							"name": "BidType",
							"required": "Y"
						},
						{
							"name": "NumTickets",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "SideValue1",
							"required": "N"
						},
						{
							"name": "SideValue2",
							"required": "N"
						},
						{
							"name": "LiquidityIndType",
							"required": "N"
						},
						{
							"name": "WtAverageLiquidity",
							"required": "N"
						},
						{
							"name": "ExchangeForPhysical",
							"required": "N"
						},
						{
							"name": "OutMainCntryUIndex",
							"required": "N"
						},
						{
							"name": "CrossPercent",
							"required": "N"
						},
						{
							"name": "ProgRptReqs",
							"required": "N"
						},
						{
							"name": "ProgPeriodInterval",
							"required": "N"
						},
						{
							"name": "IncTaxInd",
							"required": "N"
						},
						{
							"name": "ForexReq",
							"required": "N"
						},
						{
							"name": "NumBidders",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "BidTradeType",
							"required": "Y"
						},
						{
							"name": "BasisPxType",
							"required": "Y"
						},
						{
							"name": "StrikeTime",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "BidDescReqGrp",
							"required": "N"
						},
						{
							"name": "BidCompReqGrp",
							"required": "N"
						}
					],
					"name": "BidRequest",
					"msgtype": "k",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "BidID",
							"required": "N"
						},
						{
							"name": "ClientBidID",
							"required": "N"
						}
					],
					"component": {
						"name": "BidCompRspGrp",
						"required": "Y"
					},
					"name": "BidResponse",
					"msgtype": "l",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ListID",
							"required": "Y"
						},
						{
							"name": "TotNoStrikes",
							"required": "Y"
						},
						{
							"name": "LastFragment",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "InstrmtStrkPxGrp",
							"required": "Y"
						},
						{
							"name": "UndInstrmtStrkPxGrp",
							"required": "N"
						}
					],
					"name": "ListStrikePrice",
					"msgtype": "m",
					"msgcat": "app"
				},
				{
					"name": "XMLnonFIX",
					"msgtype": "n",
					"msgcat": "admin"
				},
				{
					"field": [
						{
							"name": "RegistID",
							"required": "Y"
						},
						{
							"name": "RegistTransType",
							"required": "Y"
						},
						{
							"name": "RegistRefID",
							"required": "Y"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "RegistAcctType",
							"required": "N"
						},
						{
							"name": "TaxAdvantageType",
							"required": "N"
						},
						{
							"name": "OwnershipType",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "RgstDtlsGrp",
							"required": "N"
						},
						{
							"name": "RgstDistInstGrp",
							"required": "N"
						}
					],
					"name": "RegistrationInstructions",
					"msgtype": "o",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "RegistID",
							"required": "Y"
						},
						{
							"name": "RegistTransType",
							"required": "Y"
						},
						{
							"name": "RegistRefID",
							"required": "Y"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "RegistStatus",
							"required": "Y"
						},
						{
							"name": "RegistRejReasonCode",
							"required": "N"
						},
						{
							"name": "RegistRejReasonText",
							"required": "N"
						}
					],
					"component": {
						"name": "Parties",
						"required": "N"
					},
					"name": "RegistrationInstructionsResponse",
					"msgtype": "p",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ClOrdID",
							"required": "Y"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "MassCancelRequestType",
							"required": "Y"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "UnderlyingInstrument",
							"required": "N"
						}
					],
					"name": "OrderMassCancelRequest",
					"msgtype": "q",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "OrderID",
							"required": "Y"
						},
						{
							"name": "SecondaryOrderID",
							"required": "N"
						},
						{
							"name": "MassCancelRequestType",
							"required": "Y"
						},
						{
							"name": "MassCancelResponse",
							"required": "Y"
						},
						{
							"name": "MassCancelRejectReason",
							"required": "N"
						},
						{
							"name": "TotalAffectedOrders",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "AffectedOrdGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "UnderlyingInstrument",
							"required": "N"
						}
					],
					"name": "OrderMassCancelReport",
					"msgtype": "r",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "CrossID",
							"required": "Y"
						},
						{
							"name": "CrossType",
							"required": "Y"
						},
						{
							"name": "CrossPrioritization",
							"required": "Y"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "HandlInst",
							"required": "N"
						},
						{
							"name": "ExecInst",
							"required": "N"
						},
						{
							"name": "MinQty",
							"required": "N"
						},
						{
							"name": "MaxFloor",
							"required": "N"
						},
						{
							"name": "ExDestination",
							"required": "N"
						},
						{
							"name": "ProcessCode",
							"required": "N"
						},
						{
							"name": "PrevClosePx",
							"required": "N"
						},
						{
							"name": "LocateReqd",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "OrdType",
							"required": "Y"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "StopPx",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "ComplianceID",
							"required": "N"
						},
						{
							"name": "IOIID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "N"
						},
						{
							"name": "TimeInForce",
							"required": "N"
						},
						{
							"name": "EffectiveTime",
							"required": "N"
						},
						{
							"name": "ExpireDate",
							"required": "N"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "GTBookingInst",
							"required": "N"
						},
						{
							"name": "MaxShow",
							"required": "N"
						},
						{
							"name": "TargetStrategy",
							"required": "N"
						},
						{
							"name": "TargetStrategyParameters",
							"required": "N"
						},
						{
							"name": "ParticipationRate",
							"required": "N"
						},
						{
							"name": "CancellationRights",
							"required": "N"
						},
						{
							"name": "MoneyLaunderingStatus",
							"required": "N"
						},
						{
							"name": "RegistID",
							"required": "N"
						},
						{
							"name": "Designation",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "SideCrossOrdModGrp",
							"required": "Y"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "TrdgSesGrp",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						},
						{
							"name": "PegInstructions",
							"required": "N"
						},
						{
							"name": "DiscretionInstructions",
							"required": "N"
						}
					],
					"name": "NewOrderCross",
					"msgtype": "s",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "CrossID",
							"required": "Y"
						},
						{
							"name": "OrigCrossID",
							"required": "Y"
						},
						{
							"name": "CrossType",
							"required": "Y"
						},
						{
							"name": "CrossPrioritization",
							"required": "Y"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "HandlInst",
							"required": "N"
						},
						{
							"name": "ExecInst",
							"required": "N"
						},
						{
							"name": "MinQty",
							"required": "N"
						},
						{
							"name": "MaxFloor",
							"required": "N"
						},
						{
							"name": "ExDestination",
							"required": "N"
						},
						{
							"name": "ProcessCode",
							"required": "N"
						},
						{
							"name": "PrevClosePx",
							"required": "N"
						},
						{
							"name": "LocateReqd",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "OrdType",
							"required": "Y"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "StopPx",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "ComplianceID",
							"required": "N"
						},
						{
							"name": "IOIID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "N"
						},
						{
							"name": "TimeInForce",
							"required": "N"
						},
						{
							"name": "EffectiveTime",
							"required": "N"
						},
						{
							"name": "ExpireDate",
							"required": "N"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "GTBookingInst",
							"required": "N"
						},
						{
							"name": "MaxShow",
							"required": "N"
						},
						{
							"name": "TargetStrategy",
							"required": "N"
						},
						{
							"name": "TargetStrategyParameters",
							"required": "N"
						},
						{
							"name": "ParticipationRate",
							"required": "N"
						},
						{
							"name": "CancellationRights",
							"required": "N"
						},
						{
							"name": "MoneyLaunderingStatus",
							"required": "N"
						},
						{
							"name": "RegistID",
							"required": "N"
						},
						{
							"name": "Designation",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "SideCrossOrdModGrp",
							"required": "Y"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "TrdgSesGrp",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						},
						{
							"name": "PegInstructions",
							"required": "N"
						},
						{
							"name": "DiscretionInstructions",
							"required": "N"
						}
					],
					"name": "CrossOrderCancelReplaceRequest",
					"msgtype": "t",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "CrossID",
							"required": "Y"
						},
						{
							"name": "OrigCrossID",
							"required": "Y"
						},
						{
							"name": "CrossType",
							"required": "Y"
						},
						{
							"name": "CrossPrioritization",
							"required": "Y"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						}
					],
					"component": [
						{
							"name": "SideCrossOrdCxlGrp",
							"required": "Y"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						}
					],
					"name": "CrossOrderCancelRequest",
					"msgtype": "u",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SecurityReqID",
							"required": "Y"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "Product",
							"required": "N"
						},
						{
							"name": "SecurityType",
							"required": "N"
						},
						{
							"name": "SecuritySubType",
							"required": "N"
						}
					],
					"name": "SecurityTypeRequest",
					"msgtype": "v",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SecurityReqID",
							"required": "Y"
						},
						{
							"name": "SecurityResponseID",
							"required": "Y"
						},
						{
							"name": "SecurityResponseType",
							"required": "Y"
						},
						{
							"name": "TotNoSecurityTypes",
							"required": "N"
						},
						{
							"name": "LastFragment",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						}
					],
					"component": {
						"name": "SecTypesGrp",
						"required": "N"
					},
					"name": "SecurityTypes",
					"msgtype": "w",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SecurityReqID",
							"required": "Y"
						},
						{
							"name": "SecurityListRequestType",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "InstrumentExtension",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						}
					],
					"name": "SecurityListRequest",
					"msgtype": "x",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SecurityReqID",
							"required": "Y"
						},
						{
							"name": "SecurityResponseID",
							"required": "Y"
						},
						{
							"name": "SecurityRequestResult",
							"required": "Y"
						},
						{
							"name": "TotNoRelatedSym",
							"required": "N"
						},
						{
							"name": "LastFragment",
							"required": "N"
						}
					],
					"component": {
						"name": "SecListGrp",
						"required": "N"
					},
					"name": "SecurityList",
					"msgtype": "y",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SecurityReqID",
							"required": "Y"
						},
						{
							"name": "SecurityListRequestType",
							"required": "Y"
						},
						{
							"name": "SecuritySubType",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						}
					],
					"component": {
						"name": "UnderlyingInstrument",
						"required": "N"
					},
					"name": "DerivativeSecurityListRequest",
					"msgtype": "z",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SecurityReqID",
							"required": "Y"
						},
						{
							"name": "SecurityResponseID",
							"required": "Y"
						},
						{
							"name": "SecurityRequestResult",
							"required": "Y"
						},
						{
							"name": "TotNoRelatedSym",
							"required": "N"
						},
						{
							"name": "LastFragment",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "UnderlyingInstrument",
							"required": "N"
						},
						{
							"name": "RelSymDerivSecGrp",
							"required": "N"
						}
					],
					"name": "DerivativeSecurityList",
					"msgtype": "AA",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ClOrdID",
							"required": "Y"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "ClOrdLinkID",
							"required": "N"
						},
						{
							"name": "TradeOriginationDate",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "DayBookingInst",
							"required": "N"
						},
						{
							"name": "BookingUnit",
							"required": "N"
						},
						{
							"name": "PreallocMethod",
							"required": "N"
						},
						{
							"name": "AllocID",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "CashMargin",
							"required": "N"
						},
						{
							"name": "ClearingFeeIndicator",
							"required": "N"
						},
						{
							"name": "HandlInst",
							"required": "N"
						},
						{
							"name": "ExecInst",
							"required": "N"
						},
						{
							"name": "MinQty",
							"required": "N"
						},
						{
							"name": "MaxFloor",
							"required": "N"
						},
						{
							"name": "ExDestination",
							"required": "N"
						},
						{
							"name": "ProcessCode",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "PrevClosePx",
							"required": "N"
						},
						{
							"name": "LocateReqd",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "OrdType",
							"required": "Y"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "StopPx",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "ComplianceID",
							"required": "N"
						},
						{
							"name": "SolicitedFlag",
							"required": "N"
						},
						{
							"name": "IOIID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "N"
						},
						{
							"name": "TimeInForce",
							"required": "N"
						},
						{
							"name": "EffectiveTime",
							"required": "N"
						},
						{
							"name": "ExpireDate",
							"required": "N"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "GTBookingInst",
							"required": "N"
						},
						{
							"name": "OrderCapacity",
							"required": "N"
						},
						{
							"name": "OrderRestrictions",
							"required": "N"
						},
						{
							"name": "CustOrderCapacity",
							"required": "N"
						},
						{
							"name": "ForexReq",
							"required": "N"
						},
						{
							"name": "SettlCurrency",
							"required": "N"
						},
						{
							"name": "BookingType",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "PositionEffect",
							"required": "N"
						},
						{
							"name": "CoveredOrUncovered",
							"required": "N"
						},
						{
							"name": "MaxShow",
							"required": "N"
						},
						{
							"name": "TargetStrategy",
							"required": "N"
						},
						{
							"name": "TargetStrategyParameters",
							"required": "N"
						},
						{
							"name": "ParticipationRate",
							"required": "N"
						},
						{
							"name": "CancellationRights",
							"required": "N"
						},
						{
							"name": "MoneyLaunderingStatus",
							"required": "N"
						},
						{
							"name": "RegistID",
							"required": "N"
						},
						{
							"name": "Designation",
							"required": "N"
						},
						{
							"name": "MultiLegRptTypeReq",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "PreAllocMlegGrp",
							"required": "N"
						},
						{
							"name": "TrdgSesGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "LegOrdGrp",
							"required": "Y"
						},
						{
							"name": "OrderQtyData",
							"required": "Y"
						},
						{
							"name": "CommissionData",
							"required": "N"
						},
						{
							"name": "PegInstructions",
							"required": "N"
						},
						{
							"name": "DiscretionInstructions",
							"required": "N"
						}
					],
					"name": "NewOrderMultileg",
					"msgtype": "AB",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "OrigClOrdID",
							"required": "Y"
						},
						{
							"name": "ClOrdID",
							"required": "Y"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "ClOrdLinkID",
							"required": "N"
						},
						{
							"name": "OrigOrdModTime",
							"required": "N"
						},
						{
							"name": "TradeOriginationDate",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "DayBookingInst",
							"required": "N"
						},
						{
							"name": "BookingUnit",
							"required": "N"
						},
						{
							"name": "PreallocMethod",
							"required": "N"
						},
						{
							"name": "AllocID",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "CashMargin",
							"required": "N"
						},
						{
							"name": "ClearingFeeIndicator",
							"required": "N"
						},
						{
							"name": "HandlInst",
							"required": "N"
						},
						{
							"name": "ExecInst",
							"required": "N"
						},
						{
							"name": "MinQty",
							"required": "N"
						},
						{
							"name": "MaxFloor",
							"required": "N"
						},
						{
							"name": "ExDestination",
							"required": "N"
						},
						{
							"name": "ProcessCode",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "PrevClosePx",
							"required": "N"
						},
						{
							"name": "LocateReqd",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "OrdType",
							"required": "Y"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "StopPx",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "ComplianceID",
							"required": "N"
						},
						{
							"name": "SolicitedFlag",
							"required": "N"
						},
						{
							"name": "IOIID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "N"
						},
						{
							"name": "TimeInForce",
							"required": "N"
						},
						{
							"name": "EffectiveTime",
							"required": "N"
						},
						{
							"name": "ExpireDate",
							"required": "N"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "GTBookingInst",
							"required": "N"
						},
						{
							"name": "OrderCapacity",
							"required": "N"
						},
						{
							"name": "OrderRestrictions",
							"required": "N"
						},
						{
							"name": "CustOrderCapacity",
							"required": "N"
						},
						{
							"name": "ForexReq",
							"required": "N"
						},
						{
							"name": "SettlCurrency",
							"required": "N"
						},
						{
							"name": "BookingType",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "PositionEffect",
							"required": "N"
						},
						{
							"name": "CoveredOrUncovered",
							"required": "N"
						},
						{
							"name": "MaxShow",
							"required": "N"
						},
						{
							"name": "TargetStrategy",
							"required": "N"
						},
						{
							"name": "TargetStrategyParameters",
							"required": "N"
						},
						{
							"name": "ParticipationRate",
							"required": "N"
						},
						{
							"name": "CancellationRights",
							"required": "N"
						},
						{
							"name": "MoneyLaunderingStatus",
							"required": "N"
						},
						{
							"name": "RegistID",
							"required": "N"
						},
						{
							"name": "Designation",
							"required": "N"
						},
						{
							"name": "MultiLegRptTypeReq",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "PreAllocMlegGrp",
							"required": "N"
						},
						{
							"name": "TrdgSesGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "LegOrdGrp",
							"required": "Y"
						},
						{
							"name": "OrderQtyData",
							"required": "Y"
						},
						{
							"name": "CommissionData",
							"required": "N"
						},
						{
							"name": "PegInstructions",
							"required": "N"
						},
						{
							"name": "DiscretionInstructions",
							"required": "N"
						}
					],
					"name": "MultilegOrderCancelReplace",
					"msgtype": "AC",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "TradeRequestID",
							"required": "Y"
						},
						{
							"name": "TradeRequestType",
							"required": "Y"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						},
						{
							"name": "TradeReportID",
							"required": "N"
						},
						{
							"name": "SecondaryTradeReportID",
							"required": "N"
						},
						{
							"name": "ExecID",
							"required": "N"
						},
						{
							"name": "ExecType",
							"required": "N"
						},
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "MatchStatus",
							"required": "N"
						},
						{
							"name": "TrdType",
							"required": "N"
						},
						{
							"name": "TrdSubType",
							"required": "N"
						},
						{
							"name": "TransferReason",
							"required": "N"
						},
						{
							"name": "SecondaryTrdType",
							"required": "N"
						},
						{
							"name": "TradeLinkID",
							"required": "N"
						},
						{
							"name": "TrdMatchID",
							"required": "N"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "TimeBracket",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "MultiLegReportingType",
							"required": "N"
						},
						{
							"name": "TradeInputSource",
							"required": "N"
						},
						{
							"name": "TradeInputDevice",
							"required": "N"
						},
						{
							"name": "ResponseTransportType",
							"required": "N"
						},
						{
							"name": "ResponseDestination",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "InstrumentExtension",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "TrdCapDtGrp",
							"required": "N"
						}
					],
					"name": "TradeCaptureReportRequest",
					"msgtype": "AD",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "TradeReportID",
							"required": "Y"
						},
						{
							"name": "TradeReportTransType",
							"required": "N"
						},
						{
							"name": "TradeReportType",
							"required": "N"
						},
						{
							"name": "TradeRequestID",
							"required": "N"
						},
						{
							"name": "TrdType",
							"required": "N"
						},
						{
							"name": "TrdSubType",
							"required": "N"
						},
						{
							"name": "SecondaryTrdType",
							"required": "N"
						},
						{
							"name": "TransferReason",
							"required": "N"
						},
						{
							"name": "ExecType",
							"required": "N"
						},
						{
							"name": "TotNumTradeReports",
							"required": "N"
						},
						{
							"name": "LastRptRequested",
							"required": "N"
						},
						{
							"name": "UnsolicitedIndicator",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						},
						{
							"name": "TradeReportRefID",
							"required": "N"
						},
						{
							"name": "SecondaryTradeReportRefID",
							"required": "N"
						},
						{
							"name": "SecondaryTradeReportID",
							"required": "N"
						},
						{
							"name": "TradeLinkID",
							"required": "N"
						},
						{
							"name": "TrdMatchID",
							"required": "N"
						},
						{
							"name": "ExecID",
							"required": "N"
						},
						{
							"name": "OrdStatus",
							"required": "N"
						},
						{
							"name": "SecondaryExecID",
							"required": "N"
						},
						{
							"name": "ExecRestatementReason",
							"required": "N"
						},
						{
							"name": "PreviouslyReported",
							"required": "Y"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "UnderlyingTradingSessionID",
							"required": "N"
						},
						{
							"name": "UnderlyingTradingSessionSubID",
							"required": "N"
						},
						{
							"name": "LastQty",
							"required": "Y"
						},
						{
							"name": "LastPx",
							"required": "Y"
						},
						{
							"name": "LastParPx",
							"required": "N"
						},
						{
							"name": "LastSpotRate",
							"required": "N"
						},
						{
							"name": "LastForwardPoints",
							"required": "N"
						},
						{
							"name": "LastMkt",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "Y"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "N"
						},
						{
							"name": "AvgPx",
							"required": "N"
						},
						{
							"name": "AvgPxIndicator",
							"required": "N"
						},
						{
							"name": "MultiLegReportingType",
							"required": "N"
						},
						{
							"name": "TradeLegRefID",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "MatchStatus",
							"required": "N"
						},
						{
							"name": "MatchType",
							"required": "N"
						},
						{
							"name": "CopyMsgIndicator",
							"required": "N"
						},
						{
							"name": "PublishTrdIndicator",
							"required": "N"
						},
						{
							"name": "ShortSaleReason",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "OrderQtyData",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "PositionAmountData",
							"required": "N"
						},
						{
							"name": "TrdInstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "TrdRegTimestamps",
							"required": "N"
						},
						{
							"name": "TrdCapRptSideGrp",
							"required": "Y"
						}
					],
					"name": "TradeCaptureReport",
					"msgtype": "AE",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "MassStatusReqID",
							"required": "Y"
						},
						{
							"name": "MassStatusReqType",
							"required": "Y"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "UnderlyingInstrument",
							"required": "N"
						}
					],
					"name": "OrderMassStatusRequest",
					"msgtype": "AF",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "QuoteReqID",
							"required": "Y"
						},
						{
							"name": "RFQReqID",
							"required": "N"
						},
						{
							"name": "QuoteRequestRejectReason",
							"required": "Y"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": {
						"name": "QuotReqRjctGrp",
						"required": "Y"
					},
					"name": "QuoteRequestReject",
					"msgtype": "AG",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "RFQReqID",
							"required": "Y"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						}
					],
					"component": {
						"name": "RFQReqGrp",
						"required": "Y"
					},
					"name": "RFQRequest",
					"msgtype": "AH",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "QuoteStatusReqID",
							"required": "N"
						},
						{
							"name": "QuoteReqID",
							"required": "N"
						},
						{
							"name": "QuoteID",
							"required": "Y"
						},
						{
							"name": "QuoteRespID",
							"required": "N"
						},
						{
							"name": "QuoteType",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "SettlDate2",
							"required": "N"
						},
						{
							"name": "OrderQty2",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "BidPx",
							"required": "N"
						},
						{
							"name": "OfferPx",
							"required": "N"
						},
						{
							"name": "MktBidPx",
							"required": "N"
						},
						{
							"name": "MktOfferPx",
							"required": "N"
						},
						{
							"name": "MinBidSize",
							"required": "N"
						},
						{
							"name": "BidSize",
							"required": "N"
						},
						{
							"name": "MinOfferSize",
							"required": "N"
						},
						{
							"name": "OfferSize",
							"required": "N"
						},
						{
							"name": "ValidUntilTime",
							"required": "N"
						},
						{
							"name": "BidSpotRate",
							"required": "N"
						},
						{
							"name": "OfferSpotRate",
							"required": "N"
						},
						{
							"name": "BidForwardPoints",
							"required": "N"
						},
						{
							"name": "OfferForwardPoints",
							"required": "N"
						},
						{
							"name": "MidPx",
							"required": "N"
						},
						{
							"name": "BidYield",
							"required": "N"
						},
						{
							"name": "MidYield",
							"required": "N"
						},
						{
							"name": "OfferYield",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "OrdType",
							"required": "N"
						},
						{
							"name": "BidForwardPoints2",
							"required": "N"
						},
						{
							"name": "OfferForwardPoints2",
							"required": "N"
						},
						{
							"name": "SettlCurrBidFxRate",
							"required": "N"
						},
						{
							"name": "SettlCurrOfferFxRate",
							"required": "N"
						},
						{
							"name": "SettlCurrFxRateCalc",
							"required": "N"
						},
						{
							"name": "CommType",
							"required": "N"
						},
						{
							"name": "Commission",
							"required": "N"
						},
						{
							"name": "CustOrderCapacity",
							"required": "N"
						},
						{
							"name": "ExDestination",
							"required": "N"
						},
						{
							"name": "QuoteStatus",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "OrderQtyData",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "LegQuotStatGrp",
							"required": "N"
						},
						{
							"name": "QuotQualGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						}
					],
					"name": "QuoteStatusReport",
					"msgtype": "AI",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "QuoteRespID",
							"required": "Y"
						},
						{
							"name": "QuoteID",
							"required": "N"
						},
						{
							"name": "QuoteRespType",
							"required": "Y"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "OrderCapacity",
							"required": "N"
						},
						{
							"name": "IOIID",
							"required": "N"
						},
						{
							"name": "QuoteType",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "SettlDate2",
							"required": "N"
						},
						{
							"name": "OrderQty2",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "BidPx",
							"required": "N"
						},
						{
							"name": "OfferPx",
							"required": "N"
						},
						{
							"name": "MktBidPx",
							"required": "N"
						},
						{
							"name": "MktOfferPx",
							"required": "N"
						},
						{
							"name": "MinBidSize",
							"required": "N"
						},
						{
							"name": "BidSize",
							"required": "N"
						},
						{
							"name": "MinOfferSize",
							"required": "N"
						},
						{
							"name": "OfferSize",
							"required": "N"
						},
						{
							"name": "ValidUntilTime",
							"required": "N"
						},
						{
							"name": "BidSpotRate",
							"required": "N"
						},
						{
							"name": "OfferSpotRate",
							"required": "N"
						},
						{
							"name": "BidForwardPoints",
							"required": "N"
						},
						{
							"name": "OfferForwardPoints",
							"required": "N"
						},
						{
							"name": "MidPx",
							"required": "N"
						},
						{
							"name": "BidYield",
							"required": "N"
						},
						{
							"name": "MidYield",
							"required": "N"
						},
						{
							"name": "OfferYield",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "OrdType",
							"required": "N"
						},
						{
							"name": "BidForwardPoints2",
							"required": "N"
						},
						{
							"name": "OfferForwardPoints2",
							"required": "N"
						},
						{
							"name": "SettlCurrBidFxRate",
							"required": "N"
						},
						{
							"name": "SettlCurrOfferFxRate",
							"required": "N"
						},
						{
							"name": "SettlCurrFxRateCalc",
							"required": "N"
						},
						{
							"name": "Commission",
							"required": "N"
						},
						{
							"name": "CommType",
							"required": "N"
						},
						{
							"name": "CustOrderCapacity",
							"required": "N"
						},
						{
							"name": "ExDestination",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "QuotQualGrp",
							"required": "N"
						},
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "OrderQtyData",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "LegQuotGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						}
					],
					"name": "QuoteResponse",
					"msgtype": "AJ",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ConfirmID",
							"required": "Y"
						},
						{
							"name": "ConfirmRefID",
							"required": "N"
						},
						{
							"name": "ConfirmReqID",
							"required": "N"
						},
						{
							"name": "ConfirmTransType",
							"required": "Y"
						},
						{
							"name": "ConfirmType",
							"required": "Y"
						},
						{
							"name": "CopyMsgIndicator",
							"required": "N"
						},
						{
							"name": "LegalConfirm",
							"required": "N"
						},
						{
							"name": "ConfirmStatus",
							"required": "Y"
						},
						{
							"name": "AllocID",
							"required": "N"
						},
						{
							"name": "SecondaryAllocID",
							"required": "N"
						},
						{
							"name": "IndividualAllocID",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "TradeDate",
							"required": "Y"
						},
						{
							"name": "AllocQty",
							"required": "Y"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "LastMkt",
							"required": "N"
						},
						{
							"name": "AllocAccount",
							"required": "Y"
						},
						{
							"name": "AllocAcctIDSource",
							"required": "N"
						},
						{
							"name": "AllocAccountType",
							"required": "N"
						},
						{
							"name": "AvgPx",
							"required": "Y"
						},
						{
							"name": "AvgPxPrecision",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "AvgParPx",
							"required": "N"
						},
						{
							"name": "ReportedPx",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "ProcessCode",
							"required": "N"
						},
						{
							"name": "GrossTradeAmt",
							"required": "Y"
						},
						{
							"name": "NumDaysInterest",
							"required": "N"
						},
						{
							"name": "ExDate",
							"required": "N"
						},
						{
							"name": "AccruedInterestRate",
							"required": "N"
						},
						{
							"name": "AccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "InterestAtMaturity",
							"required": "N"
						},
						{
							"name": "EndAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "StartCash",
							"required": "N"
						},
						{
							"name": "EndCash",
							"required": "N"
						},
						{
							"name": "Concession",
							"required": "N"
						},
						{
							"name": "TotalTakedown",
							"required": "N"
						},
						{
							"name": "NetMoney",
							"required": "Y"
						},
						{
							"name": "MaturityNetMoney",
							"required": "N"
						},
						{
							"name": "SettlCurrAmt",
							"required": "N"
						},
						{
							"name": "SettlCurrency",
							"required": "N"
						},
						{
							"name": "SettlCurrFxRate",
							"required": "N"
						},
						{
							"name": "SettlCurrFxRateCalc",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "SharedCommission",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "OrdAllocGrp",
							"required": "N"
						},
						{
							"name": "TrdRegTimestamps",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "InstrumentExtension",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "Y"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "Y"
						},
						{
							"name": "YieldData",
							"required": "N"
						},
						{
							"name": "CpctyConfGrp",
							"required": "Y"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "SettlInstructionsData",
							"required": "N"
						},
						{
							"name": "CommissionData",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "MiscFeesGrp",
							"required": "N"
						}
					],
					"name": "Confirmation",
					"msgtype": "AK",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "PosReqID",
							"required": "Y"
						},
						{
							"name": "PosTransType",
							"required": "Y"
						},
						{
							"name": "PosMaintAction",
							"required": "Y"
						},
						{
							"name": "OrigPosReqRefID",
							"required": "N"
						},
						{
							"name": "PosMaintRptRefID",
							"required": "N"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "Y"
						},
						{
							"name": "SettlSessID",
							"required": "N"
						},
						{
							"name": "SettlSessSubID",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "Y"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "AdjustmentType",
							"required": "N"
						},
						{
							"name": "ContraryInstructionIndicator",
							"required": "N"
						},
						{
							"name": "PriorSpreadIndicator",
							"required": "N"
						},
						{
							"name": "ThresholdAmount",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "Y"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "TrdgSesGrp",
							"required": "N"
						},
						{
							"name": "PositionQty",
							"required": "Y"
						}
					],
					"name": "PositionMaintenanceRequest",
					"msgtype": "AL",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "PosMaintRptID",
							"required": "Y"
						},
						{
							"name": "PosTransType",
							"required": "Y"
						},
						{
							"name": "PosReqID",
							"required": "N"
						},
						{
							"name": "PosMaintAction",
							"required": "Y"
						},
						{
							"name": "OrigPosReqRefID",
							"required": "Y"
						},
						{
							"name": "PosMaintStatus",
							"required": "Y"
						},
						{
							"name": "PosMaintResult",
							"required": "N"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "Y"
						},
						{
							"name": "SettlSessID",
							"required": "N"
						},
						{
							"name": "SettlSessSubID",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "Y"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "AdjustmentType",
							"required": "N"
						},
						{
							"name": "ThresholdAmount",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "TrdgSesGrp",
							"required": "N"
						},
						{
							"name": "PositionQty",
							"required": "Y"
						},
						{
							"name": "PositionAmountData",
							"required": "Y"
						}
					],
					"name": "PositionMaintenanceReport",
					"msgtype": "AM",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "PosReqID",
							"required": "Y"
						},
						{
							"name": "PosReqType",
							"required": "Y"
						},
						{
							"name": "MatchStatus",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "Y"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "Y"
						},
						{
							"name": "SettlSessID",
							"required": "N"
						},
						{
							"name": "SettlSessSubID",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "ResponseTransportType",
							"required": "N"
						},
						{
							"name": "ResponseDestination",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "Y"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "TrdgSesGrp",
							"required": "N"
						}
					],
					"name": "RequestForPositions",
					"msgtype": "AN",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "PosMaintRptID",
							"required": "Y"
						},
						{
							"name": "PosReqID",
							"required": "N"
						},
						{
							"name": "TotalNumPosReports",
							"required": "N"
						},
						{
							"name": "UnsolicitedIndicator",
							"required": "N"
						},
						{
							"name": "PosReqResult",
							"required": "Y"
						},
						{
							"name": "PosReqStatus",
							"required": "Y"
						},
						{
							"name": "Account",
							"required": "Y"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "ResponseTransportType",
							"required": "N"
						},
						{
							"name": "ResponseDestination",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "Y"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						}
					],
					"name": "RequestForPositionsAck",
					"msgtype": "AO",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "PosMaintRptID",
							"required": "Y"
						},
						{
							"name": "PosReqID",
							"required": "N"
						},
						{
							"name": "PosReqType",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						},
						{
							"name": "TotalNumPosReports",
							"required": "N"
						},
						{
							"name": "UnsolicitedIndicator",
							"required": "N"
						},
						{
							"name": "PosReqResult",
							"required": "Y"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "Y"
						},
						{
							"name": "SettlSessID",
							"required": "N"
						},
						{
							"name": "SettlSessSubID",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "Y"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "SettlPrice",
							"required": "Y"
						},
						{
							"name": "SettlPriceType",
							"required": "Y"
						},
						{
							"name": "PriorSettlPrice",
							"required": "Y"
						},
						{
							"name": "RegistStatus",
							"required": "N"
						},
						{
							"name": "DeliveryDate",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "Y"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "PosUndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "PositionQty",
							"required": "Y"
						},
						{
							"name": "PositionAmountData",
							"required": "Y"
						}
					],
					"name": "PositionReport",
					"msgtype": "AP",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "TradeRequestID",
							"required": "Y"
						},
						{
							"name": "TradeRequestType",
							"required": "Y"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						},
						{
							"name": "TotNumTradeReports",
							"required": "N"
						},
						{
							"name": "TradeRequestResult",
							"required": "Y"
						},
						{
							"name": "TradeRequestStatus",
							"required": "Y"
						},
						{
							"name": "MultiLegReportingType",
							"required": "N"
						},
						{
							"name": "ResponseTransportType",
							"required": "N"
						},
						{
							"name": "ResponseDestination",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						}
					],
					"name": "TradeCaptureReportRequestAck",
					"msgtype": "AQ",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "TradeReportID",
							"required": "Y"
						},
						{
							"name": "TradeReportTransType",
							"required": "N"
						},
						{
							"name": "TradeReportType",
							"required": "N"
						},
						{
							"name": "TrdType",
							"required": "N"
						},
						{
							"name": "TrdSubType",
							"required": "N"
						},
						{
							"name": "SecondaryTrdType",
							"required": "N"
						},
						{
							"name": "TransferReason",
							"required": "N"
						},
						{
							"name": "ExecType",
							"required": "Y"
						},
						{
							"name": "TradeReportRefID",
							"required": "N"
						},
						{
							"name": "SecondaryTradeReportRefID",
							"required": "N"
						},
						{
							"name": "TrdRptStatus",
							"required": "N"
						},
						{
							"name": "TradeReportRejectReason",
							"required": "N"
						},
						{
							"name": "SecondaryTradeReportID",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						},
						{
							"name": "TradeLinkID",
							"required": "N"
						},
						{
							"name": "TrdMatchID",
							"required": "N"
						},
						{
							"name": "ExecID",
							"required": "N"
						},
						{
							"name": "SecondaryExecID",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "ResponseTransportType",
							"required": "N"
						},
						{
							"name": "ResponseDestination",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "ClearingFeeIndicator",
							"required": "N"
						},
						{
							"name": "OrderCapacity",
							"required": "N"
						},
						{
							"name": "OrderRestrictions",
							"required": "N"
						},
						{
							"name": "CustOrderCapacity",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AcctIDSource",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "PositionEffect",
							"required": "N"
						},
						{
							"name": "PreallocMethod",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "TrdRegTimestamps",
							"required": "N"
						},
						{
							"name": "TrdInstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "TrdAllocGrp",
							"required": "N"
						}
					],
					"name": "TradeCaptureReportAck",
					"msgtype": "AR",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "AllocReportID",
							"required": "Y"
						},
						{
							"name": "AllocID",
							"required": "N"
						},
						{
							"name": "AllocTransType",
							"required": "Y"
						},
						{
							"name": "AllocReportRefID",
							"required": "N"
						},
						{
							"name": "AllocCancReplaceReason",
							"required": "N"
						},
						{
							"name": "SecondaryAllocID",
							"required": "N"
						},
						{
							"name": "AllocReportType",
							"required": "Y"
						},
						{
							"name": "AllocStatus",
							"required": "Y"
						},
						{
							"name": "AllocRejCode",
							"required": "N"
						},
						{
							"name": "RefAllocID",
							"required": "N"
						},
						{
							"name": "AllocIntermedReqType",
							"required": "N"
						},
						{
							"name": "AllocLinkID",
							"required": "N"
						},
						{
							"name": "AllocLinkType",
							"required": "N"
						},
						{
							"name": "BookingRefID",
							"required": "N"
						},
						{
							"name": "AllocNoOrdersType",
							"required": "Y"
						},
						{
							"name": "PreviouslyReported",
							"required": "N"
						},
						{
							"name": "ReversalIndicator",
							"required": "N"
						},
						{
							"name": "MatchType",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "Y"
						},
						{
							"name": "Quantity",
							"required": "Y"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "LastMkt",
							"required": "N"
						},
						{
							"name": "TradeOriginationDate",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "AvgPx",
							"required": "Y"
						},
						{
							"name": "AvgParPx",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "AvgPxPrecision",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "Y"
						},
						{
							"name": "TransactTime",
							"required": "N"
						},
						{
							"name": "SettlType",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "BookingType",
							"required": "N"
						},
						{
							"name": "GrossTradeAmt",
							"required": "N"
						},
						{
							"name": "Concession",
							"required": "N"
						},
						{
							"name": "TotalTakedown",
							"required": "N"
						},
						{
							"name": "NetMoney",
							"required": "N"
						},
						{
							"name": "PositionEffect",
							"required": "N"
						},
						{
							"name": "AutoAcceptIndicator",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						},
						{
							"name": "NumDaysInterest",
							"required": "N"
						},
						{
							"name": "AccruedInterestRate",
							"required": "N"
						},
						{
							"name": "AccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "TotalAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "InterestAtMaturity",
							"required": "N"
						},
						{
							"name": "EndAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "StartCash",
							"required": "N"
						},
						{
							"name": "EndCash",
							"required": "N"
						},
						{
							"name": "LegalConfirm",
							"required": "N"
						},
						{
							"name": "TotNoAllocs",
							"required": "N"
						},
						{
							"name": "LastFragment",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "OrdAllocGrp",
							"required": "N"
						},
						{
							"name": "ExecAllocGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "Y"
						},
						{
							"name": "InstrumentExtension",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "YieldData",
							"required": "N"
						},
						{
							"name": "AllocGrp",
							"required": "N"
						}
					],
					"name": "AllocationReport",
					"msgtype": "AS",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "AllocReportID",
							"required": "Y"
						},
						{
							"name": "AllocID",
							"required": "Y"
						},
						{
							"name": "SecondaryAllocID",
							"required": "N"
						},
						{
							"name": "TradeDate",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "AllocStatus",
							"required": "Y"
						},
						{
							"name": "AllocRejCode",
							"required": "N"
						},
						{
							"name": "AllocReportType",
							"required": "N"
						},
						{
							"name": "AllocIntermedReqType",
							"required": "N"
						},
						{
							"name": "MatchStatus",
							"required": "N"
						},
						{
							"name": "Product",
							"required": "N"
						},
						{
							"name": "SecurityType",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "AllocAckGrp",
							"required": "N"
						}
					],
					"name": "AllocationReportAck",
					"msgtype": "AT",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ConfirmID",
							"required": "Y"
						},
						{
							"name": "TradeDate",
							"required": "Y"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "AffirmStatus",
							"required": "Y"
						},
						{
							"name": "ConfirmRejReason",
							"required": "N"
						},
						{
							"name": "MatchStatus",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"name": "ConfirmationAck",
					"msgtype": "AU",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "SettlInstReqID",
							"required": "Y"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "AllocAccount",
							"required": "N"
						},
						{
							"name": "AllocAcctIDSource",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "Product",
							"required": "N"
						},
						{
							"name": "SecurityType",
							"required": "N"
						},
						{
							"name": "CFICode",
							"required": "N"
						},
						{
							"name": "EffectiveTime",
							"required": "N"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "LastUpdateTime",
							"required": "N"
						},
						{
							"name": "StandInstDbType",
							"required": "N"
						},
						{
							"name": "StandInstDbName",
							"required": "N"
						},
						{
							"name": "StandInstDbID",
							"required": "N"
						}
					],
					"component": {
						"name": "Parties",
						"required": "N"
					},
					"name": "SettlementInstructionRequest",
					"msgtype": "AV",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "AsgnRptID",
							"required": "Y"
						},
						{
							"name": "TotNumAssignmentReports",
							"required": "N"
						},
						{
							"name": "LastRptRequested",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "Y"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "ThresholdAmount",
							"required": "N"
						},
						{
							"name": "SettlPrice",
							"required": "Y"
						},
						{
							"name": "SettlPriceType",
							"required": "Y"
						},
						{
							"name": "UnderlyingSettlPrice",
							"required": "Y"
						},
						{
							"name": "ExpireDate",
							"required": "N"
						},
						{
							"name": "AssignmentMethod",
							"required": "Y"
						},
						{
							"name": "AssignmentUnit",
							"required": "N"
						},
						{
							"name": "OpenInterest",
							"required": "Y"
						},
						{
							"name": "ExerciseMethod",
							"required": "Y"
						},
						{
							"name": "SettlSessID",
							"required": "Y"
						},
						{
							"name": "SettlSessSubID",
							"required": "Y"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "Y"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "Y"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "PositionQty",
							"required": "Y"
						},
						{
							"name": "PositionAmountData",
							"required": "Y"
						}
					],
					"name": "AssignmentReport",
					"msgtype": "AW",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "CollReqID",
							"required": "Y"
						},
						{
							"name": "CollAsgnReason",
							"required": "Y"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "SecondaryOrderID",
							"required": "N"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "Quantity",
							"required": "N"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "MarginExcess",
							"required": "N"
						},
						{
							"name": "TotalNetValue",
							"required": "N"
						},
						{
							"name": "CashOutstanding",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "AccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "EndAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "StartCash",
							"required": "N"
						},
						{
							"name": "EndCash",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "SettlSessID",
							"required": "N"
						},
						{
							"name": "SettlSessSubID",
							"required": "N"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "ExecCollGrp",
							"required": "N"
						},
						{
							"name": "TrdCollGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtCollGrp",
							"required": "N"
						},
						{
							"name": "TrdRegTimestamps",
							"required": "N"
						},
						{
							"name": "MiscFeesGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						}
					],
					"name": "CollateralRequest",
					"msgtype": "AX",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "CollAsgnID",
							"required": "Y"
						},
						{
							"name": "CollReqID",
							"required": "N"
						},
						{
							"name": "CollAsgnReason",
							"required": "Y"
						},
						{
							"name": "CollAsgnTransType",
							"required": "Y"
						},
						{
							"name": "CollAsgnRefID",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "ExpireTime",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "SecondaryOrderID",
							"required": "N"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "Quantity",
							"required": "N"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "MarginExcess",
							"required": "N"
						},
						{
							"name": "TotalNetValue",
							"required": "N"
						},
						{
							"name": "CashOutstanding",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "AccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "EndAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "StartCash",
							"required": "N"
						},
						{
							"name": "EndCash",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "SettlSessID",
							"required": "N"
						},
						{
							"name": "SettlSessSubID",
							"required": "N"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "ExecCollGrp",
							"required": "N"
						},
						{
							"name": "TrdCollGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtCollGrp",
							"required": "N"
						},
						{
							"name": "TrdRegTimestamps",
							"required": "N"
						},
						{
							"name": "MiscFeesGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "SettlInstructionsData",
							"required": "N"
						}
					],
					"name": "CollateralAssignment",
					"msgtype": "AY",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "CollRespID",
							"required": "Y"
						},
						{
							"name": "CollAsgnID",
							"required": "Y"
						},
						{
							"name": "CollReqID",
							"required": "N"
						},
						{
							"name": "CollAsgnReason",
							"required": "Y"
						},
						{
							"name": "CollAsgnTransType",
							"required": "N"
						},
						{
							"name": "CollAsgnRespType",
							"required": "Y"
						},
						{
							"name": "CollAsgnRejectReason",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "SecondaryOrderID",
							"required": "N"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "Quantity",
							"required": "N"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "MarginExcess",
							"required": "N"
						},
						{
							"name": "TotalNetValue",
							"required": "N"
						},
						{
							"name": "CashOutstanding",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "AccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "EndAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "StartCash",
							"required": "N"
						},
						{
							"name": "EndCash",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "ExecCollGrp",
							"required": "N"
						},
						{
							"name": "TrdCollGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtCollGrp",
							"required": "N"
						},
						{
							"name": "TrdRegTimestamps",
							"required": "N"
						},
						{
							"name": "MiscFeesGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						}
					],
					"name": "CollateralResponse",
					"msgtype": "AZ",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "CollRptID",
							"required": "Y"
						},
						{
							"name": "CollInquiryID",
							"required": "N"
						},
						{
							"name": "CollStatus",
							"required": "Y"
						},
						{
							"name": "TotNumReports",
							"required": "N"
						},
						{
							"name": "LastRptRequested",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "SecondaryOrderID",
							"required": "N"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "Quantity",
							"required": "N"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "MarginExcess",
							"required": "N"
						},
						{
							"name": "TotalNetValue",
							"required": "N"
						},
						{
							"name": "CashOutstanding",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "AccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "EndAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "StartCash",
							"required": "N"
						},
						{
							"name": "EndCash",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "SettlSessID",
							"required": "N"
						},
						{
							"name": "SettlSessSubID",
							"required": "N"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "ExecCollGrp",
							"required": "N"
						},
						{
							"name": "TrdCollGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "TrdRegTimestamps",
							"required": "N"
						},
						{
							"name": "MiscFeesGrp",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "SettlInstructionsData",
							"required": "N"
						}
					],
					"name": "CollateralReport",
					"msgtype": "BA",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "CollInquiryID",
							"required": "N"
						},
						{
							"name": "SubscriptionRequestType",
							"required": "N"
						},
						{
							"name": "ResponseTransportType",
							"required": "N"
						},
						{
							"name": "ResponseDestination",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "SecondaryOrderID",
							"required": "N"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "Quantity",
							"required": "N"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "MarginExcess",
							"required": "N"
						},
						{
							"name": "TotalNetValue",
							"required": "N"
						},
						{
							"name": "CashOutstanding",
							"required": "N"
						},
						{
							"name": "Side",
							"required": "N"
						},
						{
							"name": "Price",
							"required": "N"
						},
						{
							"name": "PriceType",
							"required": "N"
						},
						{
							"name": "AccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "EndAccruedInterestAmt",
							"required": "N"
						},
						{
							"name": "StartCash",
							"required": "N"
						},
						{
							"name": "EndCash",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "SettlSessID",
							"required": "N"
						},
						{
							"name": "SettlSessSubID",
							"required": "N"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "CollInqQualGrp",
							"required": "N"
						},
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "ExecCollGrp",
							"required": "N"
						},
						{
							"name": "TrdCollGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						},
						{
							"name": "TrdRegTimestamps",
							"required": "N"
						},
						{
							"name": "SpreadOrBenchmarkCurveData",
							"required": "N"
						},
						{
							"name": "Stipulations",
							"required": "N"
						},
						{
							"name": "SettlInstructionsData",
							"required": "N"
						}
					],
					"name": "CollateralInquiry",
					"msgtype": "BB",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "NetworkRequestType",
							"required": "Y"
						},
						{
							"name": "NetworkRequestID",
							"required": "Y"
						}
					],
					"component": {
						"name": "CompIDReqGrp",
						"required": "N"
					},
					"name": "NetworkCounterpartySystemStatusRequest",
					"msgtype": "BC",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "NetworkStatusResponseType",
							"required": "Y"
						},
						{
							"name": "NetworkRequestID",
							"required": "N"
						},
						{
							"name": "NetworkResponseID",
							"required": "Y"
						},
						{
							"name": "LastNetworkResponseID",
							"required": "N"
						}
					],
					"component": {
						"name": "CompIDStatGrp",
						"required": "Y"
					},
					"name": "NetworkCounterpartySystemStatusResponse",
					"msgtype": "BD",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "UserRequestID",
							"required": "Y"
						},
						{
							"name": "UserRequestType",
							"required": "Y"
						},
						{
							"name": "Username",
							"required": "Y"
						},
						{
							"name": "Password",
							"required": "N"
						},
						{
							"name": "NewPassword",
							"required": "N"
						},
						{
							"name": "RawDataLength",
							"required": "N"
						},
						{
							"name": "RawData",
							"required": "N"
						}
					],
					"name": "UserRequest",
					"msgtype": "BE",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "UserRequestID",
							"required": "Y"
						},
						{
							"name": "Username",
							"required": "Y"
						},
						{
							"name": "UserStatus",
							"required": "N"
						},
						{
							"name": "UserStatusText",
							"required": "N"
						}
					],
					"name": "UserResponse",
					"msgtype": "BF",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "CollInquiryID",
							"required": "Y"
						},
						{
							"name": "CollInquiryStatus",
							"required": "Y"
						},
						{
							"name": "CollInquiryResult",
							"required": "N"
						},
						{
							"name": "TotNumReports",
							"required": "N"
						},
						{
							"name": "Account",
							"required": "N"
						},
						{
							"name": "AccountType",
							"required": "N"
						},
						{
							"name": "ClOrdID",
							"required": "N"
						},
						{
							"name": "OrderID",
							"required": "N"
						},
						{
							"name": "SecondaryOrderID",
							"required": "N"
						},
						{
							"name": "SecondaryClOrdID",
							"required": "N"
						},
						{
							"name": "SettlDate",
							"required": "N"
						},
						{
							"name": "Quantity",
							"required": "N"
						},
						{
							"name": "QtyType",
							"required": "N"
						},
						{
							"name": "Currency",
							"required": "N"
						},
						{
							"name": "TradingSessionID",
							"required": "N"
						},
						{
							"name": "TradingSessionSubID",
							"required": "N"
						},
						{
							"name": "SettlSessID",
							"required": "N"
						},
						{
							"name": "SettlSessSubID",
							"required": "N"
						},
						{
							"name": "ClearingBusinessDate",
							"required": "N"
						},
						{
							"name": "ResponseTransportType",
							"required": "N"
						},
						{
							"name": "ResponseDestination",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "CollInqQualGrp",
							"required": "N"
						},
						{
							"name": "Parties",
							"required": "N"
						},
						{
							"name": "ExecCollGrp",
							"required": "N"
						},
						{
							"name": "TrdCollGrp",
							"required": "N"
						},
						{
							"name": "Instrument",
							"required": "N"
						},
						{
							"name": "FinancingDetails",
							"required": "N"
						},
						{
							"name": "InstrmtLegGrp",
							"required": "N"
						},
						{
							"name": "UndInstrmtGrp",
							"required": "N"
						}
					],
					"name": "CollateralInquiryAck",
					"msgtype": "BG",
					"msgcat": "app"
				},
				{
					"field": [
						{
							"name": "ConfirmReqID",
							"required": "Y"
						},
						{
							"name": "ConfirmType",
							"required": "Y"
						},
						{
							"name": "AllocID",
							"required": "N"
						},
						{
							"name": "SecondaryAllocID",
							"required": "N"
						},
						{
							"name": "IndividualAllocID",
							"required": "N"
						},
						{
							"name": "TransactTime",
							"required": "Y"
						},
						{
							"name": "AllocAccount",
							"required": "N"
						},
						{
							"name": "AllocAcctIDSource",
							"required": "N"
						},
						{
							"name": "AllocAccountType",
							"required": "N"
						},
						{
							"name": "Text",
							"required": "N"
						},
						{
							"name": "EncodedTextLen",
							"required": "N"
						},
						{
							"name": "EncodedText",
							"required": "N"
						}
					],
					"component": {
						"name": "OrdAllocGrp",
						"required": "N"
					},
					"name": "ConfirmationRequest",
					"msgtype": "BH",
					"msgcat": "app"
				}
			]
		},
		"trailer": {
			"field": [
				{
					"name": "SignatureLength",
					"required": "N"
				},
				{
					"name": "Signature",
					"required": "N"
				},
				{
					"name": "CheckSum",
					"required": "Y"
				}
			]
		},
		"components": {
			"component": [
				{
					"field": [
						{
							"name": "Commission",
							"required": "N"
						},
						{
							"name": "CommType",
							"required": "N"
						},
						{
							"name": "CommCurrency",
							"required": "N"
						},
						{
							"name": "FundRenewWaiv",
							"required": "N"
						}
					],
					"name": "CommissionData"
				},
				{
					"field": [
						{
							"name": "DiscretionInst",
							"required": "N"
						},
						{
							"name": "DiscretionOffsetValue",
							"required": "N"
						},
						{
							"name": "DiscretionMoveType",
							"required": "N"
						},
						{
							"name": "DiscretionOffsetType",
							"required": "N"
						},
						{
							"name": "DiscretionLimitType",
							"required": "N"
						},
						{
							"name": "DiscretionRoundDirection",
							"required": "N"
						},
						{
							"name": "DiscretionScope",
							"required": "N"
						}
					],
					"name": "DiscretionInstructions"
				},
				{
					"field": [
						{
							"name": "AgreementDesc",
							"required": "N"
						},
						{
							"name": "AgreementID",
							"required": "N"
						},
						{
							"name": "AgreementDate",
							"required": "N"
						},
						{
							"name": "AgreementCurrency",
							"required": "N"
						},
						{
							"name": "TerminationType",
							"required": "N"
						},
						{
							"name": "StartDate",
							"required": "N"
						},
						{
							"name": "EndDate",
							"required": "N"
						},
						{
							"name": "DeliveryType",
							"required": "N"
						},
						{
							"name": "MarginRatio",
							"required": "N"
						}
					],
					"name": "FinancingDetails"
				},
				{
					"field": [
						{
							"name": "Symbol",
							"required": "N"
						},
						{
							"name": "SymbolSfx",
							"required": "N"
						},
						{
							"name": "SecurityID",
							"required": "N"
						},
						{
							"name": "SecurityIDSource",
							"required": "N"
						},
						{
							"name": "Product",
							"required": "N"
						},
						{
							"name": "CFICode",
							"required": "N"
						},
						{
							"name": "SecurityType",
							"required": "N"
						},
						{
							"name": "SecuritySubType",
							"required": "N"
						},
						{
							"name": "MaturityMonthYear",
							"required": "N"
						},
						{
							"name": "MaturityDate",
							"required": "N"
						},
						{
							"name": "PutOrCall",
							"required": "N"
						},
						{
							"name": "CouponPaymentDate",
							"required": "N"
						},
						{
							"name": "IssueDate",
							"required": "N"
						},
						{
							"name": "RepoCollateralSecurityType",
							"required": "N"
						},
						{
							"name": "RepurchaseTerm",
							"required": "N"
						},
						{
							"name": "RepurchaseRate",
							"required": "N"
						},
						{
							"name": "Factor",
							"required": "N"
						},
						{
							"name": "CreditRating",
							"required": "N"
						},
						{
							"name": "InstrRegistry",
							"required": "N"
						},
						{
							"name": "CountryOfIssue",
							"required": "N"
						},
						{
							"name": "StateOrProvinceOfIssue",
							"required": "N"
						},
						{
							"name": "LocaleOfIssue",
							"required": "N"
						},
						{
							"name": "RedemptionDate",
							"required": "N"
						},
						{
							"name": "StrikePrice",
							"required": "N"
						},
						{
							"name": "StrikeCurrency",
							"required": "N"
						},
						{
							"name": "OptAttribute",
							"required": "N"
						},
						{
							"name": "ContractMultiplier",
							"required": "N"
						},
						{
							"name": "CouponRate",
							"required": "N"
						},
						{
							"name": "SecurityExchange",
							"required": "N"
						},
						{
							"name": "Issuer",
							"required": "N"
						},
						{
							"name": "EncodedIssuerLen",
							"required": "N"
						},
						{
							"name": "EncodedIssuer",
							"required": "N"
						},
						{
							"name": "SecurityDesc",
							"required": "N"
						},
						{
							"name": "EncodedSecurityDescLen",
							"required": "N"
						},
						{
							"name": "EncodedSecurityDesc",
							"required": "N"
						},
						{
							"name": "Pool",
							"required": "N"
						},
						{
							"name": "ContractSettlMonth",
							"required": "N"
						},
						{
							"name": "CPProgram",
							"required": "N"
						},
						{
							"name": "CPRegType",
							"required": "N"
						},
						{
							"name": "DatedDate",
							"required": "N"
						},
						{
							"name": "InterestAccrualDate",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "SecAltIDGrp",
							"required": "N"
						},
						{
							"name": "EvntGrp",
							"required": "N"
						}
					],
					"name": "Instrument"
				},
				{
					"field": [
						{
							"name": "DeliveryForm",
							"required": "N"
						},
						{
							"name": "PctAtRisk",
							"required": "N"
						}
					],
					"component": {
						"name": "AttrbGrp",
						"required": "N"
					},
					"name": "InstrumentExtension"
				},
				{
					"field": [
						{
							"name": "LegSymbol",
							"required": "N"
						},
						{
							"name": "LegSymbolSfx",
							"required": "N"
						},
						{
							"name": "LegSecurityID",
							"required": "N"
						},
						{
							"name": "LegSecurityIDSource",
							"required": "N"
						},
						{
							"name": "LegProduct",
							"required": "N"
						},
						{
							"name": "LegCFICode",
							"required": "N"
						},
						{
							"name": "LegSecurityType",
							"required": "N"
						},
						{
							"name": "LegSecuritySubType",
							"required": "N"
						},
						{
							"name": "LegMaturityMonthYear",
							"required": "N"
						},
						{
							"name": "LegMaturityDate",
							"required": "N"
						},
						{
							"name": "LegCouponPaymentDate",
							"required": "N"
						},
						{
							"name": "LegIssueDate",
							"required": "N"
						},
						{
							"name": "LegRepoCollateralSecurityType",
							"required": "N"
						},
						{
							"name": "LegRepurchaseTerm",
							"required": "N"
						},
						{
							"name": "LegRepurchaseRate",
							"required": "N"
						},
						{
							"name": "LegFactor",
							"required": "N"
						},
						{
							"name": "LegCreditRating",
							"required": "N"
						},
						{
							"name": "LegInstrRegistry",
							"required": "N"
						},
						{
							"name": "LegCountryOfIssue",
							"required": "N"
						},
						{
							"name": "LegStateOrProvinceOfIssue",
							"required": "N"
						},
						{
							"name": "LegLocaleOfIssue",
							"required": "N"
						},
						{
							"name": "LegRedemptionDate",
							"required": "N"
						},
						{
							"name": "LegStrikePrice",
							"required": "N"
						},
						{
							"name": "LegStrikeCurrency",
							"required": "N"
						},
						{
							"name": "LegOptAttribute",
							"required": "N"
						},
						{
							"name": "LegContractMultiplier",
							"required": "N"
						},
						{
							"name": "LegCouponRate",
							"required": "N"
						},
						{
							"name": "LegSecurityExchange",
							"required": "N"
						},
						{
							"name": "LegIssuer",
							"required": "N"
						},
						{
							"name": "EncodedLegIssuerLen",
							"required": "N"
						},
						{
							"name": "EncodedLegIssuer",
							"required": "N"
						},
						{
							"name": "LegSecurityDesc",
							"required": "N"
						},
						{
							"name": "EncodedLegSecurityDescLen",
							"required": "N"
						},
						{
							"name": "EncodedLegSecurityDesc",
							"required": "N"
						},
						{
							"name": "LegRatioQty",
							"required": "N"
						},
						{
							"name": "LegSide",
							"required": "N"
						},
						{
							"name": "LegCurrency",
							"required": "N"
						},
						{
							"name": "LegPool",
							"required": "N"
						},
						{
							"name": "LegDatedDate",
							"required": "N"
						},
						{
							"name": "LegContractSettlMonth",
							"required": "N"
						},
						{
							"name": "LegInterestAccrualDate",
							"required": "N"
						}
					],
					"component": {
						"name": "LegSecAltIDGrp",
						"required": "N"
					},
					"name": "InstrumentLeg"
				},
				{
					"field": [
						{
							"name": "LegBenchmarkCurveCurrency",
							"required": "N"
						},
						{
							"name": "LegBenchmarkCurveName",
							"required": "N"
						},
						{
							"name": "LegBenchmarkCurvePoint",
							"required": "N"
						},
						{
							"name": "LegBenchmarkPrice",
							"required": "N"
						},
						{
							"name": "LegBenchmarkPriceType",
							"required": "N"
						}
					],
					"name": "LegBenchmarkCurveData"
				},
				{
					"group": {
						"field": [
							{
								"name": "LegStipulationType",
								"required": "N"
							},
							{
								"name": "LegStipulationValue",
								"required": "N"
							}
						],
						"name": "NoLegStipulations",
						"required": "N"
					},
					"name": "LegStipulations"
				},
				{
					"group": {
						"field": [
							{
								"name": "NestedPartyID",
								"required": "N"
							},
							{
								"name": "NestedPartyIDSource",
								"required": "N"
							},
							{
								"name": "NestedPartyRole",
								"required": "N"
							}
						],
						"component": {
							"name": "NstdPtysSubGrp",
							"required": "N"
						},
						"name": "NoNestedPartyIDs",
						"required": "N"
					},
					"name": "NestedParties"
				},
				{
					"field": [
						{
							"name": "OrderQty",
							"required": "N"
						},
						{
							"name": "CashOrderQty",
							"required": "N"
						},
						{
							"name": "OrderPercent",
							"required": "N"
						},
						{
							"name": "RoundingDirection",
							"required": "N"
						},
						{
							"name": "RoundingModulus",
							"required": "N"
						}
					],
					"name": "OrderQtyData"
				},
				{
					"group": {
						"field": [
							{
								"name": "PartyID",
								"required": "N"
							},
							{
								"name": "PartyIDSource",
								"required": "N"
							},
							{
								"name": "PartyRole",
								"required": "N"
							}
						],
						"component": {
							"name": "PtysSubGrp",
							"required": "N"
						},
						"name": "NoPartyIDs",
						"required": "N"
					},
					"name": "Parties"
				},
				{
					"field": [
						{
							"name": "PegOffsetValue",
							"required": "N"
						},
						{
							"name": "PegMoveType",
							"required": "N"
						},
						{
							"name": "PegOffsetType",
							"required": "N"
						},
						{
							"name": "PegLimitType",
							"required": "N"
						},
						{
							"name": "PegRoundDirection",
							"required": "N"
						},
						{
							"name": "PegScope",
							"required": "N"
						}
					],
					"name": "PegInstructions"
				},
				{
					"group": {
						"field": [
							{
								"name": "PosAmtType",
								"required": "N"
							},
							{
								"name": "PosAmt",
								"required": "N"
							}
						],
						"name": "NoPosAmt",
						"required": "N"
					},
					"name": "PositionAmountData"
				},
				{
					"group": {
						"field": [
							{
								"name": "PosType",
								"required": "N"
							},
							{
								"name": "LongQty",
								"required": "N"
							},
							{
								"name": "ShortQty",
								"required": "N"
							},
							{
								"name": "PosQtyStatus",
								"required": "N"
							}
						],
						"component": {
							"name": "NestedParties",
							"required": "N"
						},
						"name": "NoPositions",
						"required": "N"
					},
					"name": "PositionQty"
				},
				{
					"field": [
						{
							"name": "SettlDeliveryType",
							"required": "N"
						},
						{
							"name": "StandInstDbType",
							"required": "N"
						},
						{
							"name": "StandInstDbName",
							"required": "N"
						},
						{
							"name": "StandInstDbID",
							"required": "N"
						}
					],
					"component": {
						"name": "DlvyInstGrp",
						"required": "N"
					},
					"name": "SettlInstructionsData"
				},
				{
					"group": {
						"field": [
							{
								"name": "SettlPartyID",
								"required": "N"
							},
							{
								"name": "SettlPartyIDSource",
								"required": "N"
							},
							{
								"name": "SettlPartyRole",
								"required": "N"
							}
						],
						"component": {
							"name": "SettlPtysSubGrp",
							"required": "N"
						},
						"name": "NoSettlPartyIDs",
						"required": "N"
					},
					"name": "SettlParties"
				},
				{
					"field": [
						{
							"name": "Spread",
							"required": "N"
						},
						{
							"name": "BenchmarkCurveCurrency",
							"required": "N"
						},
						{
							"name": "BenchmarkCurveName",
							"required": "N"
						},
						{
							"name": "BenchmarkCurvePoint",
							"required": "N"
						},
						{
							"name": "BenchmarkPrice",
							"required": "N"
						},
						{
							"name": "BenchmarkPriceType",
							"required": "N"
						},
						{
							"name": "BenchmarkSecurityID",
							"required": "N"
						},
						{
							"name": "BenchmarkSecurityIDSource",
							"required": "N"
						}
					],
					"name": "SpreadOrBenchmarkCurveData"
				},
				{
					"group": {
						"field": [
							{
								"name": "StipulationType",
								"required": "N"
							},
							{
								"name": "StipulationValue",
								"required": "N"
							}
						],
						"name": "NoStipulations",
						"required": "N"
					},
					"name": "Stipulations"
				},
				{
					"group": {
						"field": [
							{
								"name": "TrdRegTimestamp",
								"required": "N"
							},
							{
								"name": "TrdRegTimestampType",
								"required": "N"
							},
							{
								"name": "TrdRegTimestampOrigin",
								"required": "N"
							}
						],
						"name": "NoTrdRegTimestamps",
						"required": "N"
					},
					"name": "TrdRegTimestamps"
				},
				{
					"field": [
						{
							"name": "UnderlyingSymbol",
							"required": "N"
						},
						{
							"name": "UnderlyingSymbolSfx",
							"required": "N"
						},
						{
							"name": "UnderlyingSecurityID",
							"required": "N"
						},
						{
							"name": "UnderlyingSecurityIDSource",
							"required": "N"
						},
						{
							"name": "UnderlyingProduct",
							"required": "N"
						},
						{
							"name": "UnderlyingCFICode",
							"required": "N"
						},
						{
							"name": "UnderlyingSecurityType",
							"required": "N"
						},
						{
							"name": "UnderlyingSecuritySubType",
							"required": "N"
						},
						{
							"name": "UnderlyingMaturityMonthYear",
							"required": "N"
						},
						{
							"name": "UnderlyingMaturityDate",
							"required": "N"
						},
						{
							"name": "UnderlyingPutOrCall",
							"required": "N"
						},
						{
							"name": "UnderlyingCouponPaymentDate",
							"required": "N"
						},
						{
							"name": "UnderlyingIssueDate",
							"required": "N"
						},
						{
							"name": "UnderlyingRepoCollateralSecurityType",
							"required": "N"
						},
						{
							"name": "UnderlyingRepurchaseTerm",
							"required": "N"
						},
						{
							"name": "UnderlyingRepurchaseRate",
							"required": "N"
						},
						{
							"name": "UnderlyingFactor",
							"required": "N"
						},
						{
							"name": "UnderlyingCreditRating",
							"required": "N"
						},
						{
							"name": "UnderlyingInstrRegistry",
							"required": "N"
						},
						{
							"name": "UnderlyingCountryOfIssue",
							"required": "N"
						},
						{
							"name": "UnderlyingStateOrProvinceOfIssue",
							"required": "N"
						},
						{
							"name": "UnderlyingLocaleOfIssue",
							"required": "N"
						},
						{
							"name": "UnderlyingRedemptionDate",
							"required": "N"
						},
						{
							"name": "UnderlyingStrikePrice",
							"required": "N"
						},
						{
							"name": "UnderlyingStrikeCurrency",
							"required": "N"
						},
						{
							"name": "UnderlyingOptAttribute",
							"required": "N"
						},
						{
							"name": "UnderlyingContractMultiplier",
							"required": "N"
						},
						{
							"name": "UnderlyingCouponRate",
							"required": "N"
						},
						{
							"name": "UnderlyingSecurityExchange",
							"required": "N"
						},
						{
							"name": "UnderlyingIssuer",
							"required": "N"
						},
						{
							"name": "EncodedUnderlyingIssuerLen",
							"required": "N"
						},
						{
							"name": "EncodedUnderlyingIssuer",
							"required": "N"
						},
						{
							"name": "UnderlyingSecurityDesc",
							"required": "N"
						},
						{
							"name": "EncodedUnderlyingSecurityDescLen",
							"required": "N"
						},
						{
							"name": "EncodedUnderlyingSecurityDesc",
							"required": "N"
						},
						{
							"name": "UnderlyingCPProgram",
							"required": "N"
						},
						{
							"name": "UnderlyingCPRegType",
							"required": "N"
						},
						{
							"name": "UnderlyingCurrency",
							"required": "N"
						},
						{
							"name": "UnderlyingQty",
							"required": "N"
						},
						{
							"name": "UnderlyingPx",
							"required": "N"
						},
						{
							"name": "UnderlyingDirtyPrice",
							"required": "N"
						},
						{
							"name": "UnderlyingEndPrice",
							"required": "N"
						},
						{
							"name": "UnderlyingStartValue",
							"required": "N"
						},
						{
							"name": "UnderlyingCurrentValue",
							"required": "N"
						},
						{
							"name": "UnderlyingEndValue",
							"required": "N"
						}
					],
					"component": [
						{
							"name": "UndSecAltIDGrp",
							"required": "N"
						},
						{
							"name": "UnderlyingStipulations",
							"required": "N"
						}
					],
					"name": "UnderlyingInstrument"
				},
				{
					"field": [
						{
							"name": "YieldType",
							"required": "N"
						},
						{
							"name": "Yield",
							"required": "N"
						},
						{
							"name": "YieldCalcDate",
							"required": "N"
						},
						{
							"name": "YieldRedemptionDate",
							"required": "N"
						},
						{
							"name": "YieldRedemptionPrice",
							"required": "N"
						},
						{
							"name": "YieldRedemptionPriceType",
							"required": "N"
						}
					],
					"name": "YieldData"
				},
				{
					"group": {
						"field": [
							{
								"name": "UnderlyingStipType",
								"required": "N"
							},
							{
								"name": "UnderlyingStipValue",
								"required": "N"
							}
						],
						"name": "NoUnderlyingStips",
						"required": "N"
					},
					"name": "UnderlyingStipulations"
				},
				{
					"group": {
						"field": [
							{
								"name": "Nested2PartyID",
								"required": "N"
							},
							{
								"name": "Nested2PartyIDSource",
								"required": "N"
							},
							{
								"name": "Nested2PartyRole",
								"required": "N"
							}
						],
						"component": {
							"name": "NstdPtys2SubGrp",
							"required": "N"
						},
						"name": "NoNested2PartyIDs",
						"required": "N"
					},
					"name": "NestedParties2"
				},
				{
					"group": {
						"field": [
							{
								"name": "Nested3PartyID",
								"required": "N"
							},
							{
								"name": "Nested3PartyIDSource",
								"required": "N"
							},
							{
								"name": "Nested3PartyRole",
								"required": "N"
							}
						],
						"component": {
							"name": "NstdPtys3SubGrp",
							"required": "N"
						},
						"name": "NoNested3PartyIDs",
						"required": "N"
					},
					"name": "NestedParties3"
				},
				{
					"group": {
						"field": [
							{
								"name": "OrigClOrdID",
								"required": "N"
							},
							{
								"name": "AffectedOrderID",
								"required": "N"
							},
							{
								"name": "AffectedSecondaryOrderID",
								"required": "N"
							}
						],
						"name": "NoAffectedOrders",
						"required": "N"
					},
					"name": "AffectedOrdGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "AllocAccount",
								"required": "N"
							},
							{
								"name": "AllocAcctIDSource",
								"required": "N"
							},
							{
								"name": "AllocPrice",
								"required": "N"
							},
							{
								"name": "IndividualAllocID",
								"required": "N"
							},
							{
								"name": "IndividualAllocRejCode",
								"required": "N"
							},
							{
								"name": "AllocText",
								"required": "N"
							},
							{
								"name": "EncodedAllocTextLen",
								"required": "N"
							},
							{
								"name": "EncodedAllocText",
								"required": "N"
							}
						],
						"name": "NoAllocs",
						"required": "N"
					},
					"name": "AllocAckGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "AllocAccount",
								"required": "N"
							},
							{
								"name": "AllocAcctIDSource",
								"required": "N"
							},
							{
								"name": "MatchStatus",
								"required": "N"
							},
							{
								"name": "AllocPrice",
								"required": "N"
							},
							{
								"name": "AllocQty",
								"required": "N"
							},
							{
								"name": "IndividualAllocID",
								"required": "N"
							},
							{
								"name": "ProcessCode",
								"required": "N"
							},
							{
								"name": "NotifyBrokerOfCredit",
								"required": "N"
							},
							{
								"name": "AllocHandlInst",
								"required": "N"
							},
							{
								"name": "AllocText",
								"required": "N"
							},
							{
								"name": "EncodedAllocTextLen",
								"required": "N"
							},
							{
								"name": "EncodedAllocText",
								"required": "N"
							},
							{
								"name": "AllocAvgPx",
								"required": "N"
							},
							{
								"name": "AllocNetMoney",
								"required": "N"
							},
							{
								"name": "SettlCurrAmt",
								"required": "N"
							},
							{
								"name": "AllocSettlCurrAmt",
								"required": "N"
							},
							{
								"name": "SettlCurrency",
								"required": "N"
							},
							{
								"name": "AllocSettlCurrency",
								"required": "N"
							},
							{
								"name": "SettlCurrFxRate",
								"required": "N"
							},
							{
								"name": "SettlCurrFxRateCalc",
								"required": "N"
							},
							{
								"name": "AllocAccruedInterestAmt",
								"required": "N"
							},
							{
								"name": "AllocInterestAtMaturity",
								"required": "N"
							},
							{
								"name": "AllocSettlInstType",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "NestedParties",
								"required": "N"
							},
							{
								"name": "CommissionData",
								"required": "N"
							},
							{
								"name": "MiscFeesGrp",
								"required": "N"
							},
							{
								"name": "ClrInstGrp",
								"required": "N"
							},
							{
								"name": "SettlInstructionsData",
								"required": "N"
							}
						],
						"name": "NoAllocs",
						"required": "N"
					},
					"name": "AllocGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "ListID",
								"required": "N"
							},
							{
								"name": "Side",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "NetGrossInd",
								"required": "N"
							},
							{
								"name": "SettlType",
								"required": "N"
							},
							{
								"name": "SettlDate",
								"required": "N"
							},
							{
								"name": "Account",
								"required": "N"
							},
							{
								"name": "AcctIDSource",
								"required": "N"
							}
						],
						"name": "NoBidComponents",
						"required": "N"
					},
					"name": "BidCompReqGrp"
				},
				{
					"group": {
						"component": {
							"name": "CommissionData",
							"required": "Y"
						},
						"field": [
							{
								"name": "ListID",
								"required": "N"
							},
							{
								"name": "Country",
								"required": "N"
							},
							{
								"name": "Side",
								"required": "N"
							},
							{
								"name": "Price",
								"required": "N"
							},
							{
								"name": "PriceType",
								"required": "N"
							},
							{
								"name": "FairValue",
								"required": "N"
							},
							{
								"name": "NetGrossInd",
								"required": "N"
							},
							{
								"name": "SettlType",
								"required": "N"
							},
							{
								"name": "SettlDate",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							}
						],
						"name": "NoBidComponents",
						"required": "Y"
					},
					"name": "BidCompRspGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "BidDescriptorType",
								"required": "N"
							},
							{
								"name": "BidDescriptor",
								"required": "N"
							},
							{
								"name": "SideValueInd",
								"required": "N"
							},
							{
								"name": "LiquidityValue",
								"required": "N"
							},
							{
								"name": "LiquidityNumSecurities",
								"required": "N"
							},
							{
								"name": "LiquidityPctLow",
								"required": "N"
							},
							{
								"name": "LiquidityPctHigh",
								"required": "N"
							},
							{
								"name": "EFPTrackingError",
								"required": "N"
							},
							{
								"name": "FairValue",
								"required": "N"
							},
							{
								"name": "OutsideIndexPct",
								"required": "N"
							},
							{
								"name": "ValueOfFutures",
								"required": "N"
							}
						],
						"name": "NoBidDescriptors",
						"required": "N"
					},
					"name": "BidDescReqGrp"
				},
				{
					"group": {
						"field": {
							"name": "ClearingInstruction",
							"required": "N"
						},
						"name": "NoClearingInstructions",
						"required": "N"
					},
					"name": "ClrInstGrp"
				},
				{
					"group": {
						"field": {
							"name": "CollInquiryQualifier",
							"required": "N"
						},
						"name": "NoCollInquiryQualifier",
						"required": "N"
					},
					"name": "CollInqQualGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "RefCompID",
								"required": "N"
							},
							{
								"name": "RefSubID",
								"required": "N"
							},
							{
								"name": "LocationID",
								"required": "N"
							},
							{
								"name": "DeskID",
								"required": "N"
							}
						],
						"name": "NoCompIDs",
						"required": "N"
					},
					"name": "CompIDReqGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "RefCompID",
								"required": "N"
							},
							{
								"name": "RefSubID",
								"required": "N"
							},
							{
								"name": "LocationID",
								"required": "N"
							},
							{
								"name": "DeskID",
								"required": "N"
							},
							{
								"name": "StatusValue",
								"required": "N"
							},
							{
								"name": "StatusText",
								"required": "N"
							}
						],
						"name": "NoCompIDs",
						"required": "Y"
					},
					"name": "CompIDStatGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "ContAmtType",
								"required": "N"
							},
							{
								"name": "ContAmtValue",
								"required": "N"
							},
							{
								"name": "ContAmtCurr",
								"required": "N"
							}
						],
						"name": "NoContAmts",
						"required": "N"
					},
					"name": "ContAmtGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "ContraBroker",
								"required": "N"
							},
							{
								"name": "ContraTrader",
								"required": "N"
							},
							{
								"name": "ContraTradeQty",
								"required": "N"
							},
							{
								"name": "ContraTradeTime",
								"required": "N"
							},
							{
								"name": "ContraLegRefID",
								"required": "N"
							}
						],
						"name": "NoContraBrokers",
						"required": "N"
					},
					"name": "ContraGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "OrderCapacity",
								"required": "Y"
							},
							{
								"name": "OrderRestrictions",
								"required": "N"
							},
							{
								"name": "OrderCapacityQty",
								"required": "Y"
							}
						],
						"name": "NoCapacities",
						"required": "Y"
					},
					"name": "CpctyConfGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "LastQty",
								"required": "N"
							},
							{
								"name": "ExecID",
								"required": "N"
							},
							{
								"name": "SecondaryExecID",
								"required": "N"
							},
							{
								"name": "LastPx",
								"required": "N"
							},
							{
								"name": "LastParPx",
								"required": "N"
							},
							{
								"name": "LastCapacity",
								"required": "N"
							}
						],
						"name": "NoExecs",
						"required": "N"
					},
					"name": "ExecAllocGrp"
				},
				{
					"group": {
						"field": {
							"name": "ExecID",
							"required": "N"
						},
						"name": "NoExecs",
						"required": "N"
					},
					"name": "ExecCollGrp"
				},
				{
					"group": {
						"field": {
							"name": "ExecID",
							"required": "N"
						},
						"name": "NoExecs",
						"required": "N"
					},
					"name": "ExecsGrp"
				},
				{
					"group": {
						"component": {
							"name": "Instrument",
							"required": "N"
						},
						"name": "NoRelatedSym",
						"required": "N"
					},
					"name": "InstrmtGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "InstrumentLeg",
								"required": "N"
							},
							{
								"name": "LegStipulations",
								"required": "N"
							},
							{
								"name": "NestedParties",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "LegQty",
								"required": "N"
							},
							{
								"name": "LegSwapType",
								"required": "N"
							},
							{
								"name": "LegPositionEffect",
								"required": "N"
							},
							{
								"name": "LegCoveredOrUncovered",
								"required": "N"
							},
							{
								"name": "LegRefID",
								"required": "N"
							},
							{
								"name": "LegPrice",
								"required": "N"
							},
							{
								"name": "LegSettlType",
								"required": "N"
							},
							{
								"name": "LegSettlDate",
								"required": "N"
							},
							{
								"name": "LegLastPx",
								"required": "N"
							}
						],
						"name": "NoLegs",
						"required": "N"
					},
					"name": "InstrmtLegExecGrp"
				},
				{
					"group": {
						"component": {
							"name": "InstrumentLeg",
							"required": "N"
						},
						"name": "NoLegs",
						"required": "N"
					},
					"name": "InstrmtLegGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "InstrumentLeg",
								"required": "N"
							},
							{
								"name": "LegStipulations",
								"required": "N"
							}
						],
						"field": {
							"name": "LegIOIQty",
							"required": "N"
						},
						"name": "NoLegs",
						"required": "N"
					},
					"name": "InstrmtLegIOIGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "InstrumentLeg",
								"required": "N"
							},
							{
								"name": "LegStipulations",
								"required": "N"
							},
							{
								"name": "LegBenchmarkCurveData",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "LegSwapType",
								"required": "N"
							},
							{
								"name": "LegSettlType",
								"required": "N"
							}
						],
						"name": "NoLegs",
						"required": "N"
					},
					"name": "InstrmtLegSecListGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "Instrument",
								"required": "Y"
							},
							{
								"name": "UndInstrmtGrp",
								"required": "N"
							},
							{
								"name": "InstrmtLegGrp",
								"required": "N"
							}
						],
						"name": "NoRelatedSym",
						"required": "Y"
					},
					"name": "InstrmtMDReqGrp"
				},
				{
					"group": {
						"component": {
							"name": "Instrument",
							"required": "Y"
						},
						"name": "NoStrikes",
						"required": "Y"
					},
					"name": "InstrmtStrkPxGrp"
				},
				{
					"group": {
						"field": {
							"name": "IOIQualifier",
							"required": "N"
						},
						"name": "NoIOIQualifiers",
						"required": "N"
					},
					"name": "IOIQualGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "InstrumentLeg",
								"required": "N"
							},
							{
								"name": "LegStipulations",
								"required": "N"
							},
							{
								"name": "LegPreAllocGrp",
								"required": "N"
							},
							{
								"name": "NestedParties",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "LegQty",
								"required": "N"
							},
							{
								"name": "LegSwapType",
								"required": "N"
							},
							{
								"name": "LegPositionEffect",
								"required": "N"
							},
							{
								"name": "LegCoveredOrUncovered",
								"required": "N"
							},
							{
								"name": "LegRefID",
								"required": "N"
							},
							{
								"name": "LegPrice",
								"required": "N"
							},
							{
								"name": "LegSettlType",
								"required": "N"
							},
							{
								"name": "LegSettlDate",
								"required": "N"
							}
						],
						"name": "NoLegs",
						"required": "Y"
					},
					"name": "LegOrdGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "LegAllocAccount",
								"required": "N"
							},
							{
								"name": "LegIndividualAllocID",
								"required": "N"
							},
							{
								"name": "LegAllocQty",
								"required": "N"
							},
							{
								"name": "LegAllocAcctIDSource",
								"required": "N"
							},
							{
								"name": "LegSettlCurrency",
								"required": "N"
							}
						],
						"component": {
							"name": "NestedParties2",
							"required": "N"
						},
						"name": "NoLegAllocs",
						"required": "N"
					},
					"name": "LegPreAllocGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "InstrumentLeg",
								"required": "N"
							},
							{
								"name": "LegStipulations",
								"required": "N"
							},
							{
								"name": "NestedParties",
								"required": "N"
							},
							{
								"name": "LegBenchmarkCurveData",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "LegQty",
								"required": "N"
							},
							{
								"name": "LegSwapType",
								"required": "N"
							},
							{
								"name": "LegSettlType",
								"required": "N"
							},
							{
								"name": "LegSettlDate",
								"required": "N"
							},
							{
								"name": "LegPriceType",
								"required": "N"
							},
							{
								"name": "LegBidPx",
								"required": "N"
							},
							{
								"name": "LegOfferPx",
								"required": "N"
							}
						],
						"name": "NoLegs",
						"required": "N"
					},
					"name": "LegQuotGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "InstrumentLeg",
								"required": "N"
							},
							{
								"name": "LegStipulations",
								"required": "N"
							},
							{
								"name": "NestedParties",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "LegQty",
								"required": "N"
							},
							{
								"name": "LegSwapType",
								"required": "N"
							},
							{
								"name": "LegSettlType",
								"required": "N"
							},
							{
								"name": "LegSettlDate",
								"required": "N"
							}
						],
						"name": "NoLegs",
						"required": "N"
					},
					"name": "LegQuotStatGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "Text",
								"required": "Y"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							}
						],
						"name": "NoLinesOfText",
						"required": "Y"
					},
					"name": "LinesOfTextGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "ClOrdID",
								"required": "Y"
							},
							{
								"name": "SecondaryClOrdID",
								"required": "N"
							},
							{
								"name": "ListSeqNo",
								"required": "Y"
							},
							{
								"name": "ClOrdLinkID",
								"required": "N"
							},
							{
								"name": "SettlInstMode",
								"required": "N"
							},
							{
								"name": "TradeOriginationDate",
								"required": "N"
							},
							{
								"name": "TradeDate",
								"required": "N"
							},
							{
								"name": "Account",
								"required": "N"
							},
							{
								"name": "AcctIDSource",
								"required": "N"
							},
							{
								"name": "AccountType",
								"required": "N"
							},
							{
								"name": "DayBookingInst",
								"required": "N"
							},
							{
								"name": "BookingUnit",
								"required": "N"
							},
							{
								"name": "AllocID",
								"required": "N"
							},
							{
								"name": "PreallocMethod",
								"required": "N"
							},
							{
								"name": "SettlType",
								"required": "N"
							},
							{
								"name": "SettlDate",
								"required": "N"
							},
							{
								"name": "CashMargin",
								"required": "N"
							},
							{
								"name": "ClearingFeeIndicator",
								"required": "N"
							},
							{
								"name": "HandlInst",
								"required": "N"
							},
							{
								"name": "ExecInst",
								"required": "N"
							},
							{
								"name": "MinQty",
								"required": "N"
							},
							{
								"name": "MaxFloor",
								"required": "N"
							},
							{
								"name": "ExDestination",
								"required": "N"
							},
							{
								"name": "ProcessCode",
								"required": "N"
							},
							{
								"name": "PrevClosePx",
								"required": "N"
							},
							{
								"name": "Side",
								"required": "Y"
							},
							{
								"name": "SideValueInd",
								"required": "N"
							},
							{
								"name": "LocateReqd",
								"required": "N"
							},
							{
								"name": "TransactTime",
								"required": "N"
							},
							{
								"name": "QtyType",
								"required": "N"
							},
							{
								"name": "OrdType",
								"required": "N"
							},
							{
								"name": "PriceType",
								"required": "N"
							},
							{
								"name": "Price",
								"required": "N"
							},
							{
								"name": "StopPx",
								"required": "N"
							},
							{
								"name": "Currency",
								"required": "N"
							},
							{
								"name": "ComplianceID",
								"required": "N"
							},
							{
								"name": "SolicitedFlag",
								"required": "N"
							},
							{
								"name": "IOIID",
								"required": "N"
							},
							{
								"name": "QuoteID",
								"required": "N"
							},
							{
								"name": "TimeInForce",
								"required": "N"
							},
							{
								"name": "EffectiveTime",
								"required": "N"
							},
							{
								"name": "ExpireDate",
								"required": "N"
							},
							{
								"name": "ExpireTime",
								"required": "N"
							},
							{
								"name": "GTBookingInst",
								"required": "N"
							},
							{
								"name": "OrderCapacity",
								"required": "N"
							},
							{
								"name": "OrderRestrictions",
								"required": "N"
							},
							{
								"name": "CustOrderCapacity",
								"required": "N"
							},
							{
								"name": "ForexReq",
								"required": "N"
							},
							{
								"name": "SettlCurrency",
								"required": "N"
							},
							{
								"name": "BookingType",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							},
							{
								"name": "SettlDate2",
								"required": "N"
							},
							{
								"name": "OrderQty2",
								"required": "N"
							},
							{
								"name": "Price2",
								"required": "N"
							},
							{
								"name": "PositionEffect",
								"required": "N"
							},
							{
								"name": "CoveredOrUncovered",
								"required": "N"
							},
							{
								"name": "MaxShow",
								"required": "N"
							},
							{
								"name": "TargetStrategy",
								"required": "N"
							},
							{
								"name": "TargetStrategyParameters",
								"required": "N"
							},
							{
								"name": "ParticipationRate",
								"required": "N"
							},
							{
								"name": "Designation",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "Parties",
								"required": "N"
							},
							{
								"name": "PreAllocGrp",
								"required": "N"
							},
							{
								"name": "TrdgSesGrp",
								"required": "N"
							},
							{
								"name": "Instrument",
								"required": "Y"
							},
							{
								"name": "UndInstrmtGrp",
								"required": "N"
							},
							{
								"name": "Stipulations",
								"required": "N"
							},
							{
								"name": "OrderQtyData",
								"required": "Y"
							},
							{
								"name": "SpreadOrBenchmarkCurveData",
								"required": "N"
							},
							{
								"name": "YieldData",
								"required": "N"
							},
							{
								"name": "CommissionData",
								"required": "N"
							},
							{
								"name": "PegInstructions",
								"required": "N"
							},
							{
								"name": "DiscretionInstructions",
								"required": "N"
							}
						],
						"name": "NoOrders",
						"required": "Y"
					},
					"name": "ListOrdGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "MDEntryType",
								"required": "Y"
							},
							{
								"name": "MDEntryPx",
								"required": "N"
							},
							{
								"name": "Currency",
								"required": "N"
							},
							{
								"name": "MDEntrySize",
								"required": "N"
							},
							{
								"name": "MDEntryDate",
								"required": "N"
							},
							{
								"name": "MDEntryTime",
								"required": "N"
							},
							{
								"name": "TickDirection",
								"required": "N"
							},
							{
								"name": "MDMkt",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "QuoteCondition",
								"required": "N"
							},
							{
								"name": "TradeCondition",
								"required": "N"
							},
							{
								"name": "MDEntryOriginator",
								"required": "N"
							},
							{
								"name": "LocationID",
								"required": "N"
							},
							{
								"name": "DeskID",
								"required": "N"
							},
							{
								"name": "OpenCloseSettlFlag",
								"required": "N"
							},
							{
								"name": "TimeInForce",
								"required": "N"
							},
							{
								"name": "ExpireDate",
								"required": "N"
							},
							{
								"name": "ExpireTime",
								"required": "N"
							},
							{
								"name": "MinQty",
								"required": "N"
							},
							{
								"name": "ExecInst",
								"required": "N"
							},
							{
								"name": "SellerDays",
								"required": "N"
							},
							{
								"name": "OrderID",
								"required": "N"
							},
							{
								"name": "QuoteEntryID",
								"required": "N"
							},
							{
								"name": "MDEntryBuyer",
								"required": "N"
							},
							{
								"name": "MDEntrySeller",
								"required": "N"
							},
							{
								"name": "NumberOfOrders",
								"required": "N"
							},
							{
								"name": "MDEntryPositionNo",
								"required": "N"
							},
							{
								"name": "Scope",
								"required": "N"
							},
							{
								"name": "PriceDelta",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							}
						],
						"name": "NoMDEntries",
						"required": "Y"
					},
					"name": "MDFullGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "MDUpdateAction",
								"required": "Y"
							},
							{
								"name": "DeleteReason",
								"required": "N"
							},
							{
								"name": "MDEntryType",
								"required": "N"
							},
							{
								"name": "MDEntryID",
								"required": "N"
							},
							{
								"name": "MDEntryRefID",
								"required": "N"
							},
							{
								"name": "FinancialStatus",
								"required": "N"
							},
							{
								"name": "CorporateAction",
								"required": "N"
							},
							{
								"name": "MDEntryPx",
								"required": "N"
							},
							{
								"name": "Currency",
								"required": "N"
							},
							{
								"name": "MDEntrySize",
								"required": "N"
							},
							{
								"name": "MDEntryDate",
								"required": "N"
							},
							{
								"name": "MDEntryTime",
								"required": "N"
							},
							{
								"name": "TickDirection",
								"required": "N"
							},
							{
								"name": "MDMkt",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "QuoteCondition",
								"required": "N"
							},
							{
								"name": "TradeCondition",
								"required": "N"
							},
							{
								"name": "MDEntryOriginator",
								"required": "N"
							},
							{
								"name": "LocationID",
								"required": "N"
							},
							{
								"name": "DeskID",
								"required": "N"
							},
							{
								"name": "OpenCloseSettlFlag",
								"required": "N"
							},
							{
								"name": "TimeInForce",
								"required": "N"
							},
							{
								"name": "ExpireDate",
								"required": "N"
							},
							{
								"name": "ExpireTime",
								"required": "N"
							},
							{
								"name": "MinQty",
								"required": "N"
							},
							{
								"name": "ExecInst",
								"required": "N"
							},
							{
								"name": "SellerDays",
								"required": "N"
							},
							{
								"name": "OrderID",
								"required": "N"
							},
							{
								"name": "QuoteEntryID",
								"required": "N"
							},
							{
								"name": "MDEntryBuyer",
								"required": "N"
							},
							{
								"name": "MDEntrySeller",
								"required": "N"
							},
							{
								"name": "NumberOfOrders",
								"required": "N"
							},
							{
								"name": "MDEntryPositionNo",
								"required": "N"
							},
							{
								"name": "Scope",
								"required": "N"
							},
							{
								"name": "PriceDelta",
								"required": "N"
							},
							{
								"name": "NetChgPrevDay",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "Instrument",
								"required": "N"
							},
							{
								"name": "UndInstrmtGrp",
								"required": "N"
							},
							{
								"name": "InstrmtLegGrp",
								"required": "N"
							}
						],
						"name": "NoMDEntries",
						"required": "Y"
					},
					"name": "MDIncGrp"
				},
				{
					"group": {
						"field": {
							"name": "MDEntryType",
							"required": "Y"
						},
						"name": "NoMDEntryTypes",
						"required": "Y"
					},
					"name": "MDReqGrp"
				},
				{
					"group": {
						"field": {
							"name": "AltMDSourceID",
							"required": "N"
						},
						"name": "NoAltMDSource",
						"required": "N"
					},
					"name": "MDRjctGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "MiscFeeAmt",
								"required": "N"
							},
							{
								"name": "MiscFeeCurr",
								"required": "N"
							},
							{
								"name": "MiscFeeType",
								"required": "N"
							},
							{
								"name": "MiscFeeBasis",
								"required": "N"
							}
						],
						"name": "NoMiscFees",
						"required": "N"
					},
					"name": "MiscFeesGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "ClOrdID",
								"required": "N"
							},
							{
								"name": "OrderID",
								"required": "N"
							},
							{
								"name": "SecondaryOrderID",
								"required": "N"
							},
							{
								"name": "SecondaryClOrdID",
								"required": "N"
							},
							{
								"name": "ListID",
								"required": "N"
							},
							{
								"name": "OrderQty",
								"required": "N"
							},
							{
								"name": "OrderAvgPx",
								"required": "N"
							},
							{
								"name": "OrderBookingQty",
								"required": "N"
							}
						],
						"component": {
							"name": "NestedParties2",
							"required": "N"
						},
						"name": "NoOrders",
						"required": "N"
					},
					"name": "OrdAllocGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "ClOrdID",
								"required": "Y"
							},
							{
								"name": "SecondaryClOrdID",
								"required": "N"
							},
							{
								"name": "CumQty",
								"required": "Y"
							},
							{
								"name": "OrdStatus",
								"required": "Y"
							},
							{
								"name": "WorkingIndicator",
								"required": "N"
							},
							{
								"name": "LeavesQty",
								"required": "Y"
							},
							{
								"name": "CxlQty",
								"required": "Y"
							},
							{
								"name": "AvgPx",
								"required": "Y"
							},
							{
								"name": "OrdRejReason",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							}
						],
						"name": "NoOrders",
						"required": "Y"
					},
					"name": "OrdListStatGrp"
				},
				{
					"group": {
						"component": {
							"name": "UnderlyingInstrument",
							"required": "N"
						},
						"field": [
							{
								"name": "UnderlyingSettlPrice",
								"required": "Y"
							},
							{
								"name": "UnderlyingSettlPriceType",
								"required": "Y"
							}
						],
						"name": "NoUnderlyings",
						"required": "N"
					},
					"name": "PosUndInstrmtGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "AllocAccount",
								"required": "N"
							},
							{
								"name": "AllocAcctIDSource",
								"required": "N"
							},
							{
								"name": "AllocSettlCurrency",
								"required": "N"
							},
							{
								"name": "IndividualAllocID",
								"required": "N"
							},
							{
								"name": "AllocQty",
								"required": "N"
							}
						],
						"component": {
							"name": "NestedParties",
							"required": "N"
						},
						"name": "NoAllocs",
						"required": "N"
					},
					"name": "PreAllocGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "AllocAccount",
								"required": "N"
							},
							{
								"name": "AllocAcctIDSource",
								"required": "N"
							},
							{
								"name": "AllocSettlCurrency",
								"required": "N"
							},
							{
								"name": "IndividualAllocID",
								"required": "N"
							},
							{
								"name": "AllocQty",
								"required": "N"
							}
						],
						"component": {
							"name": "NestedParties3",
							"required": "N"
						},
						"name": "NoAllocs",
						"required": "N"
					},
					"name": "PreAllocMlegGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "Instrument",
								"required": "N"
							},
							{
								"name": "FinancingDetails",
								"required": "N"
							},
							{
								"name": "UndInstrmtGrp",
								"required": "N"
							},
							{
								"name": "InstrmtLegGrp",
								"required": "N"
							}
						],
						"name": "NoQuoteEntries",
						"required": "N"
					},
					"name": "QuotCxlEntriesGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "QuoteEntryID",
								"required": "N"
							},
							{
								"name": "BidPx",
								"required": "N"
							},
							{
								"name": "OfferPx",
								"required": "N"
							},
							{
								"name": "BidSize",
								"required": "N"
							},
							{
								"name": "OfferSize",
								"required": "N"
							},
							{
								"name": "ValidUntilTime",
								"required": "N"
							},
							{
								"name": "BidSpotRate",
								"required": "N"
							},
							{
								"name": "OfferSpotRate",
								"required": "N"
							},
							{
								"name": "BidForwardPoints",
								"required": "N"
							},
							{
								"name": "OfferForwardPoints",
								"required": "N"
							},
							{
								"name": "MidPx",
								"required": "N"
							},
							{
								"name": "BidYield",
								"required": "N"
							},
							{
								"name": "MidYield",
								"required": "N"
							},
							{
								"name": "OfferYield",
								"required": "N"
							},
							{
								"name": "TransactTime",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "SettlDate",
								"required": "N"
							},
							{
								"name": "OrdType",
								"required": "N"
							},
							{
								"name": "SettlDate2",
								"required": "N"
							},
							{
								"name": "OrderQty2",
								"required": "N"
							},
							{
								"name": "BidForwardPoints2",
								"required": "N"
							},
							{
								"name": "OfferForwardPoints2",
								"required": "N"
							},
							{
								"name": "Currency",
								"required": "N"
							},
							{
								"name": "QuoteEntryRejectReason",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "Instrument",
								"required": "N"
							},
							{
								"name": "InstrmtLegGrp",
								"required": "N"
							}
						],
						"name": "NoQuoteEntries",
						"required": "N"
					},
					"name": "QuotEntryAckGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "QuoteEntryID",
								"required": "Y"
							},
							{
								"name": "BidPx",
								"required": "N"
							},
							{
								"name": "OfferPx",
								"required": "N"
							},
							{
								"name": "BidSize",
								"required": "N"
							},
							{
								"name": "OfferSize",
								"required": "N"
							},
							{
								"name": "ValidUntilTime",
								"required": "N"
							},
							{
								"name": "BidSpotRate",
								"required": "N"
							},
							{
								"name": "OfferSpotRate",
								"required": "N"
							},
							{
								"name": "BidForwardPoints",
								"required": "N"
							},
							{
								"name": "OfferForwardPoints",
								"required": "N"
							},
							{
								"name": "MidPx",
								"required": "N"
							},
							{
								"name": "BidYield",
								"required": "N"
							},
							{
								"name": "MidYield",
								"required": "N"
							},
							{
								"name": "OfferYield",
								"required": "N"
							},
							{
								"name": "TransactTime",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "SettlDate",
								"required": "N"
							},
							{
								"name": "OrdType",
								"required": "N"
							},
							{
								"name": "SettlDate2",
								"required": "N"
							},
							{
								"name": "OrderQty2",
								"required": "N"
							},
							{
								"name": "BidForwardPoints2",
								"required": "N"
							},
							{
								"name": "OfferForwardPoints2",
								"required": "N"
							},
							{
								"name": "Currency",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "Instrument",
								"required": "N"
							},
							{
								"name": "InstrmtLegGrp",
								"required": "N"
							}
						],
						"name": "NoQuoteEntries",
						"required": "Y"
					},
					"name": "QuotEntryGrp"
				},
				{
					"group": {
						"field": {
							"name": "QuoteQualifier",
							"required": "N"
						},
						"name": "NoQuoteQualifiers",
						"required": "N"
					},
					"name": "QuotQualGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "Instrument",
								"required": "Y"
							},
							{
								"name": "FinancingDetails",
								"required": "N"
							},
							{
								"name": "UndInstrmtGrp",
								"required": "N"
							},
							{
								"name": "OrderQtyData",
								"required": "N"
							},
							{
								"name": "Stipulations",
								"required": "N"
							},
							{
								"name": "QuotReqLegsGrp",
								"required": "N"
							},
							{
								"name": "QuotQualGrp",
								"required": "N"
							},
							{
								"name": "SpreadOrBenchmarkCurveData",
								"required": "N"
							},
							{
								"name": "YieldData",
								"required": "N"
							},
							{
								"name": "Parties",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "PrevClosePx",
								"required": "N"
							},
							{
								"name": "QuoteRequestType",
								"required": "N"
							},
							{
								"name": "QuoteType",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "TradeOriginationDate",
								"required": "N"
							},
							{
								"name": "Side",
								"required": "N"
							},
							{
								"name": "QtyType",
								"required": "N"
							},
							{
								"name": "SettlType",
								"required": "N"
							},
							{
								"name": "SettlDate",
								"required": "N"
							},
							{
								"name": "SettlDate2",
								"required": "N"
							},
							{
								"name": "OrderQty2",
								"required": "N"
							},
							{
								"name": "Currency",
								"required": "N"
							},
							{
								"name": "Account",
								"required": "N"
							},
							{
								"name": "AcctIDSource",
								"required": "N"
							},
							{
								"name": "AccountType",
								"required": "N"
							},
							{
								"name": "QuotePriceType",
								"required": "N"
							},
							{
								"name": "OrdType",
								"required": "N"
							},
							{
								"name": "ValidUntilTime",
								"required": "N"
							},
							{
								"name": "ExpireTime",
								"required": "N"
							},
							{
								"name": "TransactTime",
								"required": "N"
							},
							{
								"name": "PriceType",
								"required": "N"
							},
							{
								"name": "Price",
								"required": "N"
							},
							{
								"name": "Price2",
								"required": "N"
							}
						],
						"name": "NoRelatedSym",
						"required": "Y"
					},
					"name": "QuotReqGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "InstrumentLeg",
								"required": "N"
							},
							{
								"name": "LegStipulations",
								"required": "N"
							},
							{
								"name": "NestedParties",
								"required": "N"
							},
							{
								"name": "LegBenchmarkCurveData",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "LegQty",
								"required": "N"
							},
							{
								"name": "LegSwapType",
								"required": "N"
							},
							{
								"name": "LegSettlType",
								"required": "N"
							},
							{
								"name": "LegSettlDate",
								"required": "N"
							}
						],
						"name": "NoLegs",
						"required": "N"
					},
					"name": "QuotReqLegsGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "Instrument",
								"required": "Y"
							},
							{
								"name": "FinancingDetails",
								"required": "N"
							},
							{
								"name": "UndInstrmtGrp",
								"required": "N"
							},
							{
								"name": "OrderQtyData",
								"required": "N"
							},
							{
								"name": "Stipulations",
								"required": "N"
							},
							{
								"name": "QuotReqLegsGrp",
								"required": "N"
							},
							{
								"name": "QuotQualGrp",
								"required": "N"
							},
							{
								"name": "SpreadOrBenchmarkCurveData",
								"required": "N"
							},
							{
								"name": "YieldData",
								"required": "N"
							},
							{
								"name": "Parties",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "PrevClosePx",
								"required": "N"
							},
							{
								"name": "QuoteRequestType",
								"required": "N"
							},
							{
								"name": "QuoteType",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "TradeOriginationDate",
								"required": "N"
							},
							{
								"name": "Side",
								"required": "N"
							},
							{
								"name": "QtyType",
								"required": "N"
							},
							{
								"name": "SettlType",
								"required": "N"
							},
							{
								"name": "SettlDate",
								"required": "N"
							},
							{
								"name": "SettlDate2",
								"required": "N"
							},
							{
								"name": "OrderQty2",
								"required": "N"
							},
							{
								"name": "Currency",
								"required": "N"
							},
							{
								"name": "Account",
								"required": "N"
							},
							{
								"name": "AcctIDSource",
								"required": "N"
							},
							{
								"name": "AccountType",
								"required": "N"
							},
							{
								"name": "QuotePriceType",
								"required": "N"
							},
							{
								"name": "OrdType",
								"required": "N"
							},
							{
								"name": "ExpireTime",
								"required": "N"
							},
							{
								"name": "TransactTime",
								"required": "N"
							},
							{
								"name": "PriceType",
								"required": "N"
							},
							{
								"name": "Price",
								"required": "N"
							},
							{
								"name": "Price2",
								"required": "N"
							}
						],
						"name": "NoRelatedSym",
						"required": "Y"
					},
					"name": "QuotReqRjctGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "QuoteSetID",
								"required": "N"
							},
							{
								"name": "TotNoQuoteEntries",
								"required": "N"
							},
							{
								"name": "LastFragment",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "UnderlyingInstrument",
								"required": "N"
							},
							{
								"name": "QuotEntryAckGrp",
								"required": "N"
							}
						],
						"name": "NoQuoteSets",
						"required": "N"
					},
					"name": "QuotSetAckGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "QuoteSetID",
								"required": "Y"
							},
							{
								"name": "QuoteSetValidUntilTime",
								"required": "N"
							},
							{
								"name": "TotNoQuoteEntries",
								"required": "Y"
							},
							{
								"name": "LastFragment",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "UnderlyingInstrument",
								"required": "N"
							},
							{
								"name": "QuotEntryGrp",
								"required": "Y"
							}
						],
						"name": "NoQuoteSets",
						"required": "Y"
					},
					"name": "QuotSetGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "Instrument",
								"required": "N"
							},
							{
								"name": "InstrumentExtension",
								"required": "N"
							},
							{
								"name": "InstrmtLegGrp",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "Currency",
								"required": "N"
							},
							{
								"name": "ExpirationCycle",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							}
						],
						"name": "NoRelatedSym",
						"required": "N"
					},
					"name": "RelSymDerivSecGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "Instrument",
								"required": "Y"
							},
							{
								"name": "UndInstrmtGrp",
								"required": "N"
							},
							{
								"name": "InstrmtLegGrp",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "PrevClosePx",
								"required": "N"
							},
							{
								"name": "QuoteRequestType",
								"required": "N"
							},
							{
								"name": "QuoteType",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							}
						],
						"name": "NoRelatedSym",
						"required": "Y"
					},
					"name": "RFQReqGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "DistribPaymentMethod",
								"required": "N"
							},
							{
								"name": "DistribPercentage",
								"required": "N"
							},
							{
								"name": "CashDistribCurr",
								"required": "N"
							},
							{
								"name": "CashDistribAgentName",
								"required": "N"
							},
							{
								"name": "CashDistribAgentCode",
								"required": "N"
							},
							{
								"name": "CashDistribAgentAcctNumber",
								"required": "N"
							},
							{
								"name": "CashDistribPayRef",
								"required": "N"
							},
							{
								"name": "CashDistribAgentAcctName",
								"required": "N"
							}
						],
						"name": "NoDistribInsts",
						"required": "N"
					},
					"name": "RgstDistInstGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "RegistDtls",
								"required": "N"
							},
							{
								"name": "RegistEmail",
								"required": "N"
							},
							{
								"name": "MailingDtls",
								"required": "N"
							},
							{
								"name": "MailingInst",
								"required": "N"
							},
							{
								"name": "OwnerType",
								"required": "N"
							},
							{
								"name": "DateOfBirth",
								"required": "N"
							},
							{
								"name": "InvestorCountryOfResidence",
								"required": "N"
							}
						],
						"component": {
							"name": "NestedParties",
							"required": "N"
						},
						"name": "NoRegistDtls",
						"required": "N"
					},
					"name": "RgstDtlsGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "RoutingType",
								"required": "N"
							},
							{
								"name": "RoutingID",
								"required": "N"
							}
						],
						"name": "NoRoutingIDs",
						"required": "N"
					},
					"name": "RoutingGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "Instrument",
								"required": "N"
							},
							{
								"name": "InstrumentExtension",
								"required": "N"
							},
							{
								"name": "FinancingDetails",
								"required": "N"
							},
							{
								"name": "UndInstrmtGrp",
								"required": "N"
							},
							{
								"name": "Stipulations",
								"required": "N"
							},
							{
								"name": "InstrmtLegSecListGrp",
								"required": "N"
							},
							{
								"name": "SpreadOrBenchmarkCurveData",
								"required": "N"
							},
							{
								"name": "YieldData",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "Currency",
								"required": "N"
							},
							{
								"name": "RoundLot",
								"required": "N"
							},
							{
								"name": "MinTradeVol",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "ExpirationCycle",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							}
						],
						"name": "NoRelatedSym",
						"required": "N"
					},
					"name": "SecListGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "SecurityType",
								"required": "N"
							},
							{
								"name": "SecuritySubType",
								"required": "N"
							},
							{
								"name": "Product",
								"required": "N"
							},
							{
								"name": "CFICode",
								"required": "N"
							}
						],
						"name": "NoSecurityTypes",
						"required": "N"
					},
					"name": "SecTypesGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "SettlInstID",
								"required": "N"
							},
							{
								"name": "SettlInstTransType",
								"required": "N"
							},
							{
								"name": "SettlInstRefID",
								"required": "N"
							},
							{
								"name": "Side",
								"required": "N"
							},
							{
								"name": "Product",
								"required": "N"
							},
							{
								"name": "SecurityType",
								"required": "N"
							},
							{
								"name": "CFICode",
								"required": "N"
							},
							{
								"name": "EffectiveTime",
								"required": "N"
							},
							{
								"name": "ExpireTime",
								"required": "N"
							},
							{
								"name": "LastUpdateTime",
								"required": "N"
							},
							{
								"name": "PaymentMethod",
								"required": "N"
							},
							{
								"name": "PaymentRef",
								"required": "N"
							},
							{
								"name": "CardHolderName",
								"required": "N"
							},
							{
								"name": "CardNumber",
								"required": "N"
							},
							{
								"name": "CardStartDate",
								"required": "N"
							},
							{
								"name": "CardExpDate",
								"required": "N"
							},
							{
								"name": "CardIssNum",
								"required": "N"
							},
							{
								"name": "PaymentDate",
								"required": "N"
							},
							{
								"name": "PaymentRemitterID",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "Parties",
								"required": "N"
							},
							{
								"name": "SettlInstructionsData",
								"required": "N"
							}
						],
						"name": "NoSettlInst",
						"required": "N"
					},
					"name": "SettlInstGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "Side",
								"required": "Y"
							},
							{
								"name": "OrigClOrdID",
								"required": "Y"
							},
							{
								"name": "ClOrdID",
								"required": "Y"
							},
							{
								"name": "SecondaryClOrdID",
								"required": "N"
							},
							{
								"name": "ClOrdLinkID",
								"required": "N"
							},
							{
								"name": "OrigOrdModTime",
								"required": "N"
							},
							{
								"name": "TradeOriginationDate",
								"required": "N"
							},
							{
								"name": "TradeDate",
								"required": "N"
							},
							{
								"name": "ComplianceID",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "Parties",
								"required": "N"
							},
							{
								"name": "OrderQtyData",
								"required": "Y"
							}
						],
						"name": "NoSides",
						"required": "Y"
					},
					"name": "SideCrossOrdCxlGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "Side",
								"required": "Y"
							},
							{
								"name": "ClOrdID",
								"required": "Y"
							},
							{
								"name": "SecondaryClOrdID",
								"required": "N"
							},
							{
								"name": "ClOrdLinkID",
								"required": "N"
							},
							{
								"name": "TradeOriginationDate",
								"required": "N"
							},
							{
								"name": "TradeDate",
								"required": "N"
							},
							{
								"name": "Account",
								"required": "N"
							},
							{
								"name": "AcctIDSource",
								"required": "N"
							},
							{
								"name": "AccountType",
								"required": "N"
							},
							{
								"name": "DayBookingInst",
								"required": "N"
							},
							{
								"name": "BookingUnit",
								"required": "N"
							},
							{
								"name": "PreallocMethod",
								"required": "N"
							},
							{
								"name": "AllocID",
								"required": "N"
							},
							{
								"name": "QtyType",
								"required": "N"
							},
							{
								"name": "OrderCapacity",
								"required": "N"
							},
							{
								"name": "OrderRestrictions",
								"required": "N"
							},
							{
								"name": "CustOrderCapacity",
								"required": "N"
							},
							{
								"name": "ForexReq",
								"required": "N"
							},
							{
								"name": "SettlCurrency",
								"required": "N"
							},
							{
								"name": "BookingType",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							},
							{
								"name": "PositionEffect",
								"required": "N"
							},
							{
								"name": "CoveredOrUncovered",
								"required": "N"
							},
							{
								"name": "CashMargin",
								"required": "N"
							},
							{
								"name": "ClearingFeeIndicator",
								"required": "N"
							},
							{
								"name": "SolicitedFlag",
								"required": "N"
							},
							{
								"name": "SideComplianceID",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "Parties",
								"required": "N"
							},
							{
								"name": "PreAllocGrp",
								"required": "N"
							},
							{
								"name": "OrderQtyData",
								"required": "Y"
							},
							{
								"name": "CommissionData",
								"required": "N"
							}
						],
						"name": "NoSides",
						"required": "Y"
					},
					"name": "SideCrossOrdModGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "AllocAccount",
								"required": "N"
							},
							{
								"name": "AllocAcctIDSource",
								"required": "N"
							},
							{
								"name": "AllocSettlCurrency",
								"required": "N"
							},
							{
								"name": "IndividualAllocID",
								"required": "N"
							},
							{
								"name": "AllocQty",
								"required": "N"
							}
						],
						"component": {
							"name": "NestedParties2",
							"required": "N"
						},
						"name": "NoAllocs",
						"required": "N"
					},
					"name": "TrdAllocGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "Side",
								"required": "Y"
							},
							{
								"name": "OrderID",
								"required": "Y"
							},
							{
								"name": "SecondaryOrderID",
								"required": "N"
							},
							{
								"name": "ClOrdID",
								"required": "N"
							},
							{
								"name": "SecondaryClOrdID",
								"required": "N"
							},
							{
								"name": "ListID",
								"required": "N"
							},
							{
								"name": "Account",
								"required": "N"
							},
							{
								"name": "AcctIDSource",
								"required": "N"
							},
							{
								"name": "AccountType",
								"required": "N"
							},
							{
								"name": "ProcessCode",
								"required": "N"
							},
							{
								"name": "OddLot",
								"required": "N"
							},
							{
								"name": "TradeInputSource",
								"required": "N"
							},
							{
								"name": "TradeInputDevice",
								"required": "N"
							},
							{
								"name": "OrderInputDevice",
								"required": "N"
							},
							{
								"name": "Currency",
								"required": "N"
							},
							{
								"name": "ComplianceID",
								"required": "N"
							},
							{
								"name": "SolicitedFlag",
								"required": "N"
							},
							{
								"name": "OrderCapacity",
								"required": "N"
							},
							{
								"name": "OrderRestrictions",
								"required": "N"
							},
							{
								"name": "CustOrderCapacity",
								"required": "N"
							},
							{
								"name": "OrdType",
								"required": "N"
							},
							{
								"name": "ExecInst",
								"required": "N"
							},
							{
								"name": "TransBkdTime",
								"required": "N"
							},
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							},
							{
								"name": "TimeBracket",
								"required": "N"
							},
							{
								"name": "GrossTradeAmt",
								"required": "N"
							},
							{
								"name": "NumDaysInterest",
								"required": "N"
							},
							{
								"name": "ExDate",
								"required": "N"
							},
							{
								"name": "AccruedInterestRate",
								"required": "N"
							},
							{
								"name": "AccruedInterestAmt",
								"required": "N"
							},
							{
								"name": "InterestAtMaturity",
								"required": "N"
							},
							{
								"name": "EndAccruedInterestAmt",
								"required": "N"
							},
							{
								"name": "StartCash",
								"required": "N"
							},
							{
								"name": "EndCash",
								"required": "N"
							},
							{
								"name": "Concession",
								"required": "N"
							},
							{
								"name": "TotalTakedown",
								"required": "N"
							},
							{
								"name": "NetMoney",
								"required": "N"
							},
							{
								"name": "SettlCurrAmt",
								"required": "N"
							},
							{
								"name": "SettlCurrency",
								"required": "N"
							},
							{
								"name": "SettlCurrFxRate",
								"required": "N"
							},
							{
								"name": "SettlCurrFxRateCalc",
								"required": "N"
							},
							{
								"name": "PositionEffect",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							},
							{
								"name": "SideMultiLegReportingType",
								"required": "N"
							},
							{
								"name": "ExchangeRule",
								"required": "N"
							},
							{
								"name": "TradeAllocIndicator",
								"required": "N"
							},
							{
								"name": "PreallocMethod",
								"required": "N"
							},
							{
								"name": "AllocID",
								"required": "N"
							}
						],
						"component": [
							{
								"name": "Parties",
								"required": "N"
							},
							{
								"name": "ClrInstGrp",
								"required": "N"
							},
							{
								"name": "CommissionData",
								"required": "N"
							},
							{
								"name": "ContAmtGrp",
								"required": "N"
							},
							{
								"name": "Stipulations",
								"required": "N"
							},
							{
								"name": "MiscFeesGrp",
								"required": "N"
							},
							{
								"name": "TrdAllocGrp",
								"required": "N"
							}
						],
						"name": "NoSides",
						"required": "Y"
					},
					"name": "TrdCapRptSideGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "TradeReportID",
								"required": "N"
							},
							{
								"name": "SecondaryTradeReportID",
								"required": "N"
							}
						],
						"name": "NoTrades",
						"required": "N"
					},
					"name": "TrdCollGrp"
				},
				{
					"group": {
						"component": [
							{
								"name": "InstrumentLeg",
								"required": "N"
							},
							{
								"name": "LegStipulations",
								"required": "N"
							},
							{
								"name": "NestedParties",
								"required": "N"
							}
						],
						"field": [
							{
								"name": "LegQty",
								"required": "N"
							},
							{
								"name": "LegSwapType",
								"required": "N"
							},
							{
								"name": "LegPositionEffect",
								"required": "N"
							},
							{
								"name": "LegCoveredOrUncovered",
								"required": "N"
							},
							{
								"name": "LegRefID",
								"required": "N"
							},
							{
								"name": "LegPrice",
								"required": "N"
							},
							{
								"name": "LegSettlType",
								"required": "N"
							},
							{
								"name": "LegSettlDate",
								"required": "N"
							},
							{
								"name": "LegLastPx",
								"required": "N"
							}
						],
						"name": "NoLegs",
						"required": "N"
					},
					"name": "TrdInstrmtLegGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "TradingSessionID",
								"required": "N"
							},
							{
								"name": "TradingSessionSubID",
								"required": "N"
							}
						],
						"name": "NoTradingSessions",
						"required": "N"
					},
					"name": "TrdgSesGrp"
				},
				{
					"group": {
						"component": {
							"name": "UnderlyingInstrument",
							"required": "N"
						},
						"field": {
							"name": "CollAction",
							"required": "N"
						},
						"name": "NoUnderlyings",
						"required": "N"
					},
					"name": "UndInstrmtCollGrp"
				},
				{
					"group": {
						"component": {
							"name": "UnderlyingInstrument",
							"required": "N"
						},
						"name": "NoUnderlyings",
						"required": "N"
					},
					"name": "UndInstrmtGrp"
				},
				{
					"group": {
						"component": {
							"name": "UnderlyingInstrument",
							"required": "N"
						},
						"field": [
							{
								"name": "PrevClosePx",
								"required": "N"
							},
							{
								"name": "ClOrdID",
								"required": "N"
							},
							{
								"name": "SecondaryClOrdID",
								"required": "N"
							},
							{
								"name": "Side",
								"required": "N"
							},
							{
								"name": "Price",
								"required": "Y"
							},
							{
								"name": "Currency",
								"required": "N"
							},
							{
								"name": "Text",
								"required": "N"
							},
							{
								"name": "EncodedTextLen",
								"required": "N"
							},
							{
								"name": "EncodedText",
								"required": "N"
							}
						],
						"name": "NoUnderlyings",
						"required": "N"
					},
					"name": "UndInstrmtStrkPxGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "TradeDate",
								"required": "N"
							},
							{
								"name": "TransactTime",
								"required": "N"
							}
						],
						"name": "NoDates",
						"required": "N"
					},
					"name": "TrdCapDtGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "EventType",
								"required": "N"
							},
							{
								"name": "EventDate",
								"required": "N"
							},
							{
								"name": "EventPx",
								"required": "N"
							},
							{
								"name": "EventText",
								"required": "N"
							}
						],
						"name": "NoEvents",
						"required": "N"
					},
					"name": "EvntGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "SecurityAltID",
								"required": "N"
							},
							{
								"name": "SecurityAltIDSource",
								"required": "N"
							}
						],
						"name": "NoSecurityAltID",
						"required": "N"
					},
					"name": "SecAltIDGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "LegSecurityAltID",
								"required": "N"
							},
							{
								"name": "LegSecurityAltIDSource",
								"required": "N"
							}
						],
						"name": "NoLegSecurityAltID",
						"required": "N"
					},
					"name": "LegSecAltIDGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "UnderlyingSecurityAltID",
								"required": "N"
							},
							{
								"name": "UnderlyingSecurityAltIDSource",
								"required": "N"
							}
						],
						"name": "NoUnderlyingSecurityAltID",
						"required": "N"
					},
					"name": "UndSecAltIDGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "InstrAttribType",
								"required": "N"
							},
							{
								"name": "InstrAttribValue",
								"required": "N"
							}
						],
						"name": "NoInstrAttrib",
						"required": "N"
					},
					"name": "AttrbGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "SettlInstSource",
								"required": "N"
							},
							{
								"name": "DlvyInstType",
								"required": "N"
							}
						],
						"component": {
							"name": "SettlParties",
							"required": "N"
						},
						"name": "NoDlvyInst",
						"required": "N"
					},
					"name": "DlvyInstGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "SettlPartySubID",
								"required": "N"
							},
							{
								"name": "SettlPartySubIDType",
								"required": "N"
							}
						],
						"name": "NoSettlPartySubIDs",
						"required": "N"
					},
					"name": "SettlPtysSubGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "PartySubID",
								"required": "N"
							},
							{
								"name": "PartySubIDType",
								"required": "N"
							}
						],
						"name": "NoPartySubIDs",
						"required": "N"
					},
					"name": "PtysSubGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "NestedPartySubID",
								"required": "N"
							},
							{
								"name": "NestedPartySubIDType",
								"required": "N"
							}
						],
						"name": "NoNestedPartySubIDs",
						"required": "N"
					},
					"name": "NstdPtysSubGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "HopCompID",
								"required": "N"
							},
							{
								"name": "HopSendingTime",
								"required": "N"
							},
							{
								"name": "HopRefID",
								"required": "N"
							}
						],
						"name": "NoHops",
						"required": "N"
					},
					"name": "Hop"
				},
				{
					"group": {
						"field": [
							{
								"name": "Nested2PartySubID",
								"required": "N"
							},
							{
								"name": "Nested2PartySubIDType",
								"required": "N"
							}
						],
						"name": "NoNested2PartySubIDs",
						"required": "N"
					},
					"name": "NstdPtys2SubGrp"
				},
				{
					"group": {
						"field": [
							{
								"name": "Nested3PartySubID",
								"required": "N"
							},
							{
								"name": "Nested3PartySubIDType",
								"required": "N"
							}
						],
						"name": "NoNested3PartySubIDs",
						"required": "N"
					},
					"name": "NstdPtys3SubGrp"
				}
			]
		},
		"fields": {
			"field": [
				{
					"number": "1",
					"name": "Account",
					"type": "STRING"
				},
				{
					"number": "2",
					"name": "AdvId",
					"type": "STRING"
				},
				{
					"number": "3",
					"name": "AdvRefID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "B",
							"description": "BUY"
						},
						{
							"enum": "S",
							"description": "SELL"
						},
						{
							"enum": "X",
							"description": "CROSS"
						},
						{
							"enum": "T",
							"description": "TRADE"
						}
					],
					"number": "4",
					"name": "AdvSide",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "N",
							"description": "NEW"
						},
						{
							"enum": "C",
							"description": "CANCEL"
						},
						{
							"enum": "R",
							"description": "REPLACE"
						}
					],
					"number": "5",
					"name": "AdvTransType",
					"type": "STRING"
				},
				{
					"number": "6",
					"name": "AvgPx",
					"type": "PRICE"
				},
				{
					"number": "7",
					"name": "BeginSeqNo",
					"type": "SEQNUM"
				},
				{
					"number": "8",
					"name": "BeginString",
					"type": "STRING"
				},
				{
					"number": "9",
					"name": "BodyLength",
					"type": "LENGTH"
				},
				{
					"number": "10",
					"name": "CheckSum",
					"type": "STRING"
				},
				{
					"number": "11",
					"name": "ClOrdID",
					"type": "STRING"
				},
				{
					"number": "12",
					"name": "Commission",
					"type": "AMT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "PER_UNIT"
						},
						{
							"enum": "2",
							"description": "PERCENTAGE"
						},
						{
							"enum": "3",
							"description": "ABSOLUTE"
						},
						{
							"enum": "4",
							"description": "4"
						},
						{
							"enum": "5",
							"description": "5"
						},
						{
							"enum": "6",
							"description": "POINTS_PER_BOND_OR_CONTRACT_SUPPLY_CONTRACTMULTIPLIER"
						}
					],
					"number": "13",
					"name": "CommType",
					"type": "CHAR"
				},
				{
					"number": "14",
					"name": "CumQty",
					"type": "QTY"
				},
				{
					"number": "15",
					"name": "Currency",
					"type": "CURRENCY"
				},
				{
					"number": "16",
					"name": "EndSeqNo",
					"type": "SEQNUM"
				},
				{
					"number": "17",
					"name": "ExecID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "NOT_HELD"
						},
						{
							"enum": "2",
							"description": "WORK"
						},
						{
							"enum": "3",
							"description": "GO_ALONG"
						},
						{
							"enum": "4",
							"description": "OVER_THE_DAY"
						},
						{
							"enum": "5",
							"description": "HELD"
						},
						{
							"enum": "6",
							"description": "PARTICIPATE_DONT_INITIATE"
						},
						{
							"enum": "7",
							"description": "STRICT_SCALE"
						},
						{
							"enum": "8",
							"description": "TRY_TO_SCALE"
						},
						{
							"enum": "9",
							"description": "STAY_ON_BIDSIDE"
						},
						{
							"enum": "0",
							"description": "STAY_ON_OFFERSIDE"
						},
						{
							"enum": "A",
							"description": "NO_CROSS"
						},
						{
							"enum": "B",
							"description": "OK_TO_CROSS"
						},
						{
							"enum": "C",
							"description": "CALL_FIRST"
						},
						{
							"enum": "D",
							"description": "PERCENT_OF_VOLUME"
						},
						{
							"enum": "E",
							"description": "DO_NOT_INCREASE"
						},
						{
							"enum": "F",
							"description": "DO_NOT_REDUCE"
						},
						{
							"enum": "G",
							"description": "ALL_OR_NONE"
						},
						{
							"enum": "H",
							"description": "REINSTATE_ON_SYSTEM_FAILURE"
						},
						{
							"enum": "I",
							"description": "INSTITUTIONS_ONLY"
						},
						{
							"enum": "J",
							"description": "REINSTATE_ON_TRADING_HALT"
						},
						{
							"enum": "K",
							"description": "CANCEL_ON_TRADING_HALT"
						},
						{
							"enum": "L",
							"description": "LAST_PEG"
						},
						{
							"enum": "M",
							"description": "MID_PRICE_PEG"
						},
						{
							"enum": "N",
							"description": "NON_NEGOTIABLE"
						},
						{
							"enum": "O",
							"description": "OPENING_PEG"
						},
						{
							"enum": "P",
							"description": "MARKET_PEG"
						},
						{
							"enum": "Q",
							"description": "CANCEL_ON_SYSTEM_FAILURE"
						},
						{
							"enum": "R",
							"description": "PRIMARY_PEG"
						},
						{
							"enum": "S",
							"description": "SUSPEND"
						},
						{
							"enum": "U",
							"description": "CUSTOMER_DISPLAY_INSTRUCTION"
						},
						{
							"enum": "V",
							"description": "NETTING"
						},
						{
							"enum": "W",
							"description": "PEG_TO_VWAP"
						},
						{
							"enum": "X",
							"description": "TRADE_ALONG"
						},
						{
							"enum": "Y",
							"description": "TRY_TO_STOP"
						},
						{
							"enum": "Z",
							"description": "CANCEL_IF_NOT_BEST"
						},
						{
							"enum": "a",
							"description": "TRAILING_STOP_PEG"
						},
						{
							"enum": "b",
							"description": "STRICT_LIMIT"
						},
						{
							"enum": "c",
							"description": "IGNORE_PRICE_VALIDITY_CHECKS"
						},
						{
							"enum": "d",
							"description": "PEG_TO_LIMIT_PRICE"
						},
						{
							"enum": "e",
							"description": "WORK_TO_TARGET_STRATEGY"
						}
					],
					"number": "18",
					"name": "ExecInst",
					"type": "MULTIPLEVALUESTRING"
				},
				{
					"number": "19",
					"name": "ExecRefID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION"
						},
						{
							"enum": "2",
							"description": "AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK"
						},
						{
							"enum": "3",
							"description": "MANUAL_ORDER_BEST_EXECUTION"
						}
					],
					"number": "21",
					"name": "HandlInst",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "CUSIP"
						},
						{
							"enum": "2",
							"description": "SEDOL"
						},
						{
							"enum": "3",
							"description": "QUIK"
						},
						{
							"enum": "4",
							"description": "ISIN_NUMBER"
						},
						{
							"enum": "5",
							"description": "RIC_CODE"
						},
						{
							"enum": "6",
							"description": "ISO_CURRENCY_CODE"
						},
						{
							"enum": "7",
							"description": "ISO_COUNTRY_CODE"
						},
						{
							"enum": "8",
							"description": "EXCHANGE_SYMBOL"
						},
						{
							"enum": "9",
							"description": "CONSOLIDATED_TAPE_ASSOCIATION"
						},
						{
							"enum": "A",
							"description": "BLOOMBERG_SYMBOL"
						},
						{
							"enum": "B",
							"description": "WERTPAPIER"
						},
						{
							"enum": "C",
							"description": "DUTCH"
						},
						{
							"enum": "D",
							"description": "VALOREN"
						},
						{
							"enum": "E",
							"description": "SICOVAM"
						},
						{
							"enum": "F",
							"description": "BELGIAN"
						},
						{
							"enum": "G",
							"description": "COMMON"
						},
						{
							"enum": "H",
							"description": "CLEARING_HOUSE"
						},
						{
							"enum": "I",
							"description": "ISDA_FPML_PRODUCT_SPECIFICATION"
						},
						{
							"enum": "J",
							"description": "OPTIONS_PRICE_REPORTING_AUTHORITY"
						}
					],
					"number": "22",
					"name": "SecurityIDSource",
					"type": "STRING"
				},
				{
					"number": "23",
					"name": "IOIID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "L",
							"description": "LOW"
						},
						{
							"enum": "M",
							"description": "MEDIUM"
						},
						{
							"enum": "H",
							"description": "HIGH"
						}
					],
					"number": "25",
					"name": "IOIQltyInd",
					"type": "CHAR"
				},
				{
					"number": "26",
					"name": "IOIRefID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "S",
							"description": "SMALL"
						},
						{
							"enum": "M",
							"description": "MEDIUM"
						},
						{
							"enum": "L",
							"description": "LARGE"
						}
					],
					"number": "27",
					"name": "IOIQty",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "N",
							"description": "NEW"
						},
						{
							"enum": "C",
							"description": "CANCEL"
						},
						{
							"enum": "R",
							"description": "REPLACE"
						}
					],
					"number": "28",
					"name": "IOITransType",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "AGENT"
						},
						{
							"enum": "2",
							"description": "CROSS_AS_AGENT"
						},
						{
							"enum": "3",
							"description": "CROSS_AS_PRINCIPAL"
						},
						{
							"enum": "4",
							"description": "PRINCIPAL"
						}
					],
					"number": "29",
					"name": "LastCapacity",
					"type": "CHAR"
				},
				{
					"number": "30",
					"name": "LastMkt",
					"type": "EXCHANGE"
				},
				{
					"number": "31",
					"name": "LastPx",
					"type": "PRICE"
				},
				{
					"number": "32",
					"name": "LastQty",
					"type": "QTY"
				},
				{
					"number": "33",
					"name": "NoLinesOfText",
					"type": "NUMINGROUP"
				},
				{
					"number": "34",
					"name": "MsgSeqNum",
					"type": "SEQNUM"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "HEARTBEAT"
						},
						{
							"enum": "1",
							"description": "TEST_REQUEST"
						},
						{
							"enum": "2",
							"description": "RESEND_REQUEST"
						},
						{
							"enum": "3",
							"description": "REJECT"
						},
						{
							"enum": "4",
							"description": "SEQUENCE_RESET"
						},
						{
							"enum": "5",
							"description": "LOGOUT"
						},
						{
							"enum": "6",
							"description": "INDICATION_OF_INTEREST"
						},
						{
							"enum": "7",
							"description": "ADVERTISEMENT"
						},
						{
							"enum": "8",
							"description": "EXECUTION_REPORT"
						},
						{
							"enum": "9",
							"description": "ORDER_CANCEL_REJECT"
						},
						{
							"enum": "A",
							"description": "LOGON"
						},
						{
							"enum": "B",
							"description": "NEWS"
						},
						{
							"enum": "C",
							"description": "EMAIL"
						},
						{
							"enum": "D",
							"description": "ORDER_SINGLE"
						},
						{
							"enum": "E",
							"description": "ORDER_LIST"
						},
						{
							"enum": "F",
							"description": "ORDER_CANCEL_REQUEST"
						},
						{
							"enum": "G",
							"description": "ORDER_CANCEL_REPLACE_REQUEST"
						},
						{
							"enum": "H",
							"description": "ORDER_STATUS_REQUEST"
						},
						{
							"enum": "J",
							"description": "ALLOCATION_INSTRUCTION"
						},
						{
							"enum": "K",
							"description": "LIST_CANCEL_REQUEST"
						},
						{
							"enum": "L",
							"description": "LIST_EXECUTE"
						},
						{
							"enum": "M",
							"description": "LIST_STATUS_REQUEST"
						},
						{
							"enum": "N",
							"description": "LIST_STATUS"
						},
						{
							"enum": "P",
							"description": "ALLOCATION_INSTRUCTION_ACK"
						},
						{
							"enum": "Q",
							"description": "DONT_KNOW_TRADE"
						},
						{
							"enum": "R",
							"description": "QUOTE_REQUEST"
						},
						{
							"enum": "S",
							"description": "QUOTE"
						},
						{
							"enum": "T",
							"description": "SETTLEMENT_INSTRUCTIONS"
						},
						{
							"enum": "V",
							"description": "MARKET_DATA_REQUEST"
						},
						{
							"enum": "W",
							"description": "MARKET_DATA_SNAPSHOT_FULL_REFRESH"
						},
						{
							"enum": "X",
							"description": "MARKET_DATA_INCREMENTAL_REFRESH"
						},
						{
							"enum": "Y",
							"description": "MARKET_DATA_REQUEST_REJECT"
						},
						{
							"enum": "Z",
							"description": "QUOTE_CANCEL"
						},
						{
							"enum": "a",
							"description": "QUOTE_STATUS_REQUEST"
						},
						{
							"enum": "b",
							"description": "MASS_QUOTE_ACKNOWLEDGEMENT"
						},
						{
							"enum": "c",
							"description": "SECURITY_DEFINITION_REQUEST"
						},
						{
							"enum": "d",
							"description": "SECURITY_DEFINITION"
						},
						{
							"enum": "e",
							"description": "SECURITY_STATUS_REQUEST"
						},
						{
							"enum": "f",
							"description": "SECURITY_STATUS"
						},
						{
							"enum": "g",
							"description": "TRADING_SESSION_STATUS_REQUEST"
						},
						{
							"enum": "h",
							"description": "TRADING_SESSION_STATUS"
						},
						{
							"enum": "i",
							"description": "MASS_QUOTE"
						},
						{
							"enum": "j",
							"description": "BUSINESS_MESSAGE_REJECT"
						},
						{
							"enum": "k",
							"description": "BID_REQUEST"
						},
						{
							"enum": "l",
							"description": "BID_RESPONSE"
						},
						{
							"enum": "m",
							"description": "LIST_STRIKE_PRICE"
						},
						{
							"enum": "n",
							"description": "XML_MESSAGE"
						},
						{
							"enum": "o",
							"description": "REGISTRATION_INSTRUCTIONS"
						},
						{
							"enum": "p",
							"description": "REGISTRATION_INSTRUCTIONS_RESPONSE"
						},
						{
							"enum": "q",
							"description": "ORDER_MASS_CANCEL_REQUEST"
						},
						{
							"enum": "r",
							"description": "ORDER_MASS_CANCEL_REPORT"
						},
						{
							"enum": "s",
							"description": "NEW_ORDER_s"
						},
						{
							"enum": "t",
							"description": "CROSS_ORDER_CANCEL_REPLACE_REQUEST"
						},
						{
							"enum": "u",
							"description": "CROSS_ORDER_CANCEL_REQUEST"
						},
						{
							"enum": "v",
							"description": "SECURITY_TYPE_REQUEST"
						},
						{
							"enum": "w",
							"description": "SECURITY_TYPES"
						},
						{
							"enum": "x",
							"description": "SECURITY_LIST_REQUEST"
						},
						{
							"enum": "y",
							"description": "SECURITY_LIST"
						},
						{
							"enum": "z",
							"description": "DERIVATIVE_SECURITY_LIST_REQUEST"
						},
						{
							"enum": "AA",
							"description": "DERIVATIVE_SECURITY_LIST"
						},
						{
							"enum": "AB",
							"description": "NEW_ORDER_AB"
						},
						{
							"enum": "AC",
							"description": "MULTILEG_ORDER_CANCEL_REPLACE"
						},
						{
							"enum": "AD",
							"description": "TRADE_CAPTURE_REPORT_REQUEST"
						},
						{
							"enum": "AE",
							"description": "TRADE_CAPTURE_REPORT"
						},
						{
							"enum": "AF",
							"description": "ORDER_MASS_STATUS_REQUEST"
						},
						{
							"enum": "AG",
							"description": "QUOTE_REQUEST_REJECT"
						},
						{
							"enum": "AH",
							"description": "RFQ_REQUEST"
						},
						{
							"enum": "AI",
							"description": "QUOTE_STATUS_REPORT"
						},
						{
							"enum": "AJ",
							"description": "QUOTE_RESPONSE"
						},
						{
							"enum": "AK",
							"description": "CONFIRMATION"
						},
						{
							"enum": "AL",
							"description": "POSITION_MAINTENANCE_REQUEST"
						},
						{
							"enum": "AM",
							"description": "POSITION_MAINTENANCE_REPORT"
						},
						{
							"enum": "AN",
							"description": "REQUEST_FOR_POSITIONS"
						},
						{
							"enum": "AO",
							"description": "REQUEST_FOR_POSITIONS_ACK"
						},
						{
							"enum": "AP",
							"description": "POSITION_REPORT"
						},
						{
							"enum": "AQ",
							"description": "TRADE_CAPTURE_REPORT_REQUEST_ACK"
						},
						{
							"enum": "AR",
							"description": "TRADE_CAPTURE_REPORT_ACK"
						},
						{
							"enum": "AS",
							"description": "ALLOCATION_REPORT"
						},
						{
							"enum": "AT",
							"description": "ALLOCATION_REPORT_ACK"
						},
						{
							"enum": "AU",
							"description": "CONFIRMATION_ACK"
						},
						{
							"enum": "AV",
							"description": "SETTLEMENT_INSTRUCTION_REQUEST"
						},
						{
							"enum": "AW",
							"description": "ASSIGNMENT_REPORT"
						},
						{
							"enum": "AX",
							"description": "COLLATERAL_REQUEST"
						},
						{
							"enum": "AY",
							"description": "COLLATERAL_ASSIGNMENT"
						},
						{
							"enum": "AZ",
							"description": "COLLATERAL_RESPONSE"
						},
						{
							"enum": "BA",
							"description": "COLLATERAL_REPORT"
						},
						{
							"enum": "BB",
							"description": "COLLATERAL_INQUIRY"
						},
						{
							"enum": "BC",
							"description": "NETWORK_BC"
						},
						{
							"enum": "BD",
							"description": "NETWORK_BD"
						},
						{
							"enum": "BE",
							"description": "USER_REQUEST"
						},
						{
							"enum": "BF",
							"description": "USER_RESPONSE"
						},
						{
							"enum": "BG",
							"description": "COLLATERAL_INQUIRY_ACK"
						},
						{
							"enum": "BH",
							"description": "CONFIRMATION_REQUEST"
						}
					],
					"number": "35",
					"name": "MsgType",
					"type": "STRING"
				},
				{
					"number": "36",
					"name": "NewSeqNo",
					"type": "SEQNUM"
				},
				{
					"number": "37",
					"name": "OrderID",
					"type": "STRING"
				},
				{
					"number": "38",
					"name": "OrderQty",
					"type": "QTY"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NEW"
						},
						{
							"enum": "1",
							"description": "PARTIALLY_FILLED"
						},
						{
							"enum": "2",
							"description": "FILLED"
						},
						{
							"enum": "3",
							"description": "DONE_FOR_DAY"
						},
						{
							"enum": "4",
							"description": "CANCELED"
						},
						{
							"enum": "6",
							"description": "PENDING_CANCEL"
						},
						{
							"enum": "7",
							"description": "STOPPED"
						},
						{
							"enum": "8",
							"description": "REJECTED"
						},
						{
							"enum": "9",
							"description": "SUSPENDED"
						},
						{
							"enum": "A",
							"description": "PENDING_NEW"
						},
						{
							"enum": "B",
							"description": "CALCULATED"
						},
						{
							"enum": "C",
							"description": "EXPIRED"
						},
						{
							"enum": "D",
							"description": "ACCEPTED_FOR_BIDDING"
						},
						{
							"enum": "E",
							"description": "PENDING_REPLACE"
						}
					],
					"number": "39",
					"name": "OrdStatus",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "MARKET"
						},
						{
							"enum": "2",
							"description": "LIMIT"
						},
						{
							"enum": "3",
							"description": "STOP"
						},
						{
							"enum": "4",
							"description": "STOP_LIMIT"
						},
						{
							"enum": "6",
							"description": "WITH_OR_WITHOUT"
						},
						{
							"enum": "7",
							"description": "LIMIT_OR_BETTER"
						},
						{
							"enum": "8",
							"description": "LIMIT_WITH_OR_WITHOUT"
						},
						{
							"enum": "9",
							"description": "ON_BASIS"
						},
						{
							"enum": "D",
							"description": "PREVIOUSLY_QUOTED"
						},
						{
							"enum": "E",
							"description": "PREVIOUSLY_INDICATED"
						},
						{
							"enum": "G",
							"description": "FOREX"
						},
						{
							"enum": "I",
							"description": "FUNARI"
						},
						{
							"enum": "J",
							"description": "MARKET_IF_TOUCHED"
						},
						{
							"enum": "K",
							"description": "MARKET_WITH_LEFTOVER_AS_LIMIT"
						},
						{
							"enum": "L",
							"description": "PREVIOUS_FUND_VALUATION_POINT"
						},
						{
							"enum": "M",
							"description": "NEXT_FUND_VALUATION_POINT"
						},
						{
							"enum": "P",
							"description": "PEGGED"
						}
					],
					"number": "40",
					"name": "OrdType",
					"type": "CHAR"
				},
				{
					"number": "41",
					"name": "OrigClOrdID",
					"type": "STRING"
				},
				{
					"number": "42",
					"name": "OrigTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "43",
					"name": "PossDupFlag",
					"type": "BOOLEAN"
				},
				{
					"number": "44",
					"name": "Price",
					"type": "PRICE"
				},
				{
					"number": "45",
					"name": "RefSeqNum",
					"type": "SEQNUM"
				},
				{
					"number": "48",
					"name": "SecurityID",
					"type": "STRING"
				},
				{
					"number": "49",
					"name": "SenderCompID",
					"type": "STRING"
				},
				{
					"number": "50",
					"name": "SenderSubID",
					"type": "STRING"
				},
				{
					"number": "52",
					"name": "SendingTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "53",
					"name": "Quantity",
					"type": "QTY"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "BUY"
						},
						{
							"enum": "2",
							"description": "SELL"
						},
						{
							"enum": "3",
							"description": "BUY_MINUS"
						},
						{
							"enum": "4",
							"description": "SELL_PLUS"
						},
						{
							"enum": "5",
							"description": "SELL_SHORT"
						},
						{
							"enum": "6",
							"description": "SELL_SHORT_EXEMPT"
						},
						{
							"enum": "7",
							"description": "UNDISCLOSED"
						},
						{
							"enum": "8",
							"description": "CROSS"
						},
						{
							"enum": "9",
							"description": "CROSS_SHORT"
						},
						{
							"enum": "A",
							"description": "CROSS_SHORT_EXEMPT"
						},
						{
							"enum": "B",
							"description": "AS_DEFINED"
						},
						{
							"enum": "C",
							"description": "OPPOSITE"
						},
						{
							"enum": "D",
							"description": "SUBSCRIBE"
						},
						{
							"enum": "E",
							"description": "REDEEM"
						},
						{
							"enum": "F",
							"description": "LEND"
						},
						{
							"enum": "G",
							"description": "BORROW"
						}
					],
					"number": "54",
					"name": "Side",
					"type": "CHAR"
				},
				{
					"number": "55",
					"name": "Symbol",
					"type": "STRING"
				},
				{
					"number": "56",
					"name": "TargetCompID",
					"type": "STRING"
				},
				{
					"number": "57",
					"name": "TargetSubID",
					"type": "STRING"
				},
				{
					"number": "58",
					"name": "Text",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "DAY"
						},
						{
							"enum": "1",
							"description": "GOOD_TILL_CANCEL"
						},
						{
							"enum": "2",
							"description": "AT_THE_OPENING"
						},
						{
							"enum": "3",
							"description": "IMMEDIATE_OR_CANCEL"
						},
						{
							"enum": "4",
							"description": "FILL_OR_KILL"
						},
						{
							"enum": "5",
							"description": "GOOD_TILL_CROSSING"
						},
						{
							"enum": "6",
							"description": "GOOD_TILL_DATE"
						},
						{
							"enum": "7",
							"description": "AT_THE_CLOSE"
						}
					],
					"number": "59",
					"name": "TimeInForce",
					"type": "CHAR"
				},
				{
					"number": "60",
					"name": "TransactTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NORMAL"
						},
						{
							"enum": "1",
							"description": "FLASH"
						},
						{
							"enum": "2",
							"description": "BACKGROUND"
						}
					],
					"number": "61",
					"name": "Urgency",
					"type": "CHAR"
				},
				{
					"number": "62",
					"name": "ValidUntilTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "REGULAR"
						},
						{
							"enum": "1",
							"description": "CASH"
						},
						{
							"enum": "2",
							"description": "NEXT_DAY"
						},
						{
							"enum": "3",
							"description": "T_PLUS_2"
						},
						{
							"enum": "4",
							"description": "T_PLUS_3"
						},
						{
							"enum": "5",
							"description": "T_PLUS_4"
						},
						{
							"enum": "6",
							"description": "FUTURE"
						},
						{
							"enum": "7",
							"description": "WHEN_AND_IF_ISSUED"
						},
						{
							"enum": "8",
							"description": "SELLERS_OPTION"
						},
						{
							"enum": "9",
							"description": "T_PLUS_5"
						}
					],
					"number": "63",
					"name": "SettlType",
					"type": "CHAR"
				},
				{
					"number": "64",
					"name": "SettlDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "65",
					"name": "SymbolSfx",
					"type": "STRING"
				},
				{
					"number": "66",
					"name": "ListID",
					"type": "STRING"
				},
				{
					"number": "67",
					"name": "ListSeqNo",
					"type": "INT"
				},
				{
					"number": "68",
					"name": "TotNoOrders",
					"type": "INT"
				},
				{
					"number": "69",
					"name": "ListExecInst",
					"type": "STRING"
				},
				{
					"number": "70",
					"name": "AllocID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NEW"
						},
						{
							"enum": "1",
							"description": "REPLACE"
						},
						{
							"enum": "2",
							"description": "CANCEL"
						}
					],
					"number": "71",
					"name": "AllocTransType",
					"type": "CHAR"
				},
				{
					"number": "72",
					"name": "RefAllocID",
					"type": "STRING"
				},
				{
					"number": "73",
					"name": "NoOrders",
					"type": "NUMINGROUP"
				},
				{
					"number": "74",
					"name": "AvgPxPrecision",
					"type": "INT"
				},
				{
					"number": "75",
					"name": "TradeDate",
					"type": "LOCALMKTDATE"
				},
				{
					"value": [
						{
							"enum": "O",
							"description": "OPEN"
						},
						{
							"enum": "C",
							"description": "CLOSE"
						},
						{
							"enum": "R",
							"description": "ROLLED"
						},
						{
							"enum": "F",
							"description": "FIFO"
						}
					],
					"number": "77",
					"name": "PositionEffect",
					"type": "CHAR"
				},
				{
					"number": "78",
					"name": "NoAllocs",
					"type": "NUMINGROUP"
				},
				{
					"number": "79",
					"name": "AllocAccount",
					"type": "STRING"
				},
				{
					"number": "80",
					"name": "AllocQty",
					"type": "QTY"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "REGULAR"
						},
						{
							"enum": "1",
							"description": "SOFT_DOLLAR"
						},
						{
							"enum": "2",
							"description": "STEP_IN"
						},
						{
							"enum": "3",
							"description": "STEP_OUT"
						},
						{
							"enum": "4",
							"description": "SOFT_DOLLAR_STEP_IN"
						},
						{
							"enum": "5",
							"description": "SOFT_DOLLAR_STEP_OUT"
						},
						{
							"enum": "6",
							"description": "PLAN_SPONSOR"
						}
					],
					"number": "81",
					"name": "ProcessCode",
					"type": "CHAR"
				},
				{
					"number": "82",
					"name": "NoRpts",
					"type": "INT"
				},
				{
					"number": "83",
					"name": "RptSeq",
					"type": "INT"
				},
				{
					"number": "84",
					"name": "CxlQty",
					"type": "QTY"
				},
				{
					"number": "85",
					"name": "NoDlvyInst",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "ACCEPTED"
						},
						{
							"enum": "1",
							"description": "BLOCK_LEVEL_REJECT"
						},
						{
							"enum": "2",
							"description": "ACCOUNT_LEVEL_REJECT"
						},
						{
							"enum": "3",
							"description": "RECEIVED"
						},
						{
							"enum": "4",
							"description": "INCOMPLETE"
						},
						{
							"enum": "5",
							"description": "REJECTED_BY_INTERMEDIARY"
						}
					],
					"number": "87",
					"name": "AllocStatus",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "UNKNOWN_ACCOUNT"
						},
						{
							"enum": "1",
							"description": "INCORRECT_QUANTITY"
						},
						{
							"enum": "2",
							"description": "INCORRECT_AVERAGE_PRICE"
						},
						{
							"enum": "3",
							"description": "UNKNOWN_EXECUTING_BROKER_MNEMONIC"
						},
						{
							"enum": "4",
							"description": "COMMISSION_DIFFERENCE"
						},
						{
							"enum": "5",
							"description": "UNKNOWN_ORDERID"
						},
						{
							"enum": "6",
							"description": "UNKNOWN_LISTID"
						},
						{
							"enum": "7",
							"description": "OTHER"
						},
						{
							"enum": "8",
							"description": "INCORRECT_ALLOCATED_QUANTITY"
						},
						{
							"enum": "9",
							"description": "CALCULATION_DIFFERENCE"
						},
						{
							"enum": "10",
							"description": "UNKNOWN_OR_STALE_EXECID"
						},
						{
							"enum": "11",
							"description": "MISMATCHED_DATA_VALUE"
						},
						{
							"enum": "12",
							"description": "UNKNOWN_CLORDID"
						},
						{
							"enum": "13",
							"description": "WAREHOUSE_REQUEST_REJECTED"
						}
					],
					"number": "88",
					"name": "AllocRejCode",
					"type": "INT"
				},
				{
					"number": "89",
					"name": "Signature",
					"type": "DATA"
				},
				{
					"number": "90",
					"name": "SecureDataLen",
					"type": "LENGTH"
				},
				{
					"number": "91",
					"name": "SecureData",
					"type": "DATA"
				},
				{
					"number": "93",
					"name": "SignatureLength",
					"type": "LENGTH"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NEW"
						},
						{
							"enum": "1",
							"description": "REPLY"
						},
						{
							"enum": "2",
							"description": "ADMIN_REPLY"
						}
					],
					"number": "94",
					"name": "EmailType",
					"type": "CHAR"
				},
				{
					"number": "95",
					"name": "RawDataLength",
					"type": "LENGTH"
				},
				{
					"number": "96",
					"name": "RawData",
					"type": "DATA"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "97",
					"name": "PossResend",
					"type": "BOOLEAN"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NONE"
						},
						{
							"enum": "1",
							"description": "PKCS"
						},
						{
							"enum": "2",
							"description": "DES"
						},
						{
							"enum": "3",
							"description": "PKCS_DES"
						},
						{
							"enum": "4",
							"description": "PGP_DES"
						},
						{
							"enum": "5",
							"description": "PGP_DES_MD5"
						},
						{
							"enum": "6",
							"description": "PEM_DES_MD5"
						}
					],
					"number": "98",
					"name": "EncryptMethod",
					"type": "INT"
				},
				{
					"number": "99",
					"name": "StopPx",
					"type": "PRICE"
				},
				{
					"number": "100",
					"name": "ExDestination",
					"type": "EXCHANGE"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "TOO_LATE_TO_CANCEL"
						},
						{
							"enum": "1",
							"description": "UNKNOWN_ORDER"
						},
						{
							"enum": "2",
							"description": "BROKER"
						},
						{
							"enum": "3",
							"description": "ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS"
						},
						{
							"enum": "4",
							"description": "UNABLE_TO_PROCESS_ORDER_MASS_CANCEL_REQUEST"
						},
						{
							"enum": "5",
							"description": "ORIGORDMODTIME"
						},
						{
							"enum": "6",
							"description": "DUPLICATE_CLORDID"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "102",
					"name": "CxlRejReason",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "BROKER"
						},
						{
							"enum": "1",
							"description": "UNKNOWN_SYMBOL"
						},
						{
							"enum": "2",
							"description": "EXCHANGE_CLOSED"
						},
						{
							"enum": "3",
							"description": "ORDER_EXCEEDS_LIMIT"
						},
						{
							"enum": "4",
							"description": "TOO_LATE_TO_ENTER"
						},
						{
							"enum": "5",
							"description": "UNKNOWN_ORDER"
						},
						{
							"enum": "6",
							"description": "DUPLICATE_ORDER"
						},
						{
							"enum": "7",
							"description": "DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER"
						},
						{
							"enum": "8",
							"description": "STALE_ORDER"
						},
						{
							"enum": "9",
							"description": "TRADE_ALONG_REQUIRED"
						},
						{
							"enum": "10",
							"description": "INVALID_INVESTOR_ID"
						},
						{
							"enum": "11",
							"description": "UNSUPPORTED_ORDER_CHARACTERISTIC12_SURVEILLENCE_OPTION"
						},
						{
							"enum": "13",
							"description": "INCORRECT_QUANTITY"
						},
						{
							"enum": "14",
							"description": "INCORRECT_ALLOCATED_QUANTITY"
						},
						{
							"enum": "15",
							"description": "UNKNOWN_ACCOUNT"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "103",
					"name": "OrdRejReason",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "A",
							"description": "ALL_OR_NONE"
						},
						{
							"enum": "B",
							"description": "MARKET_ON_CLOSE"
						},
						{
							"enum": "C",
							"description": "AT_THE_CLOSE"
						},
						{
							"enum": "D",
							"description": "VWAP"
						},
						{
							"enum": "I",
							"description": "IN_TOUCH_WITH"
						},
						{
							"enum": "L",
							"description": "LIMIT"
						},
						{
							"enum": "M",
							"description": "MORE_BEHIND"
						},
						{
							"enum": "O",
							"description": "AT_THE_OPEN"
						},
						{
							"enum": "P",
							"description": "TAKING_A_POSITION"
						},
						{
							"enum": "Q",
							"description": "AT_THE_MARKET"
						},
						{
							"enum": "R",
							"description": "READY_TO_TRADE"
						},
						{
							"enum": "S",
							"description": "PORTFOLIO_SHOWN"
						},
						{
							"enum": "T",
							"description": "THROUGH_THE_DAY"
						},
						{
							"enum": "V",
							"description": "VERSUS"
						},
						{
							"enum": "W",
							"description": "INDICATION"
						},
						{
							"enum": "X",
							"description": "CROSSING_OPPORTUNITY"
						},
						{
							"enum": "Y",
							"description": "AT_THE_MIDPOINT"
						},
						{
							"enum": "Z",
							"description": "PRE_OPEN"
						}
					],
					"number": "104",
					"name": "IOIQualifier",
					"type": "CHAR"
				},
				{
					"number": "106",
					"name": "Issuer",
					"type": "STRING"
				},
				{
					"number": "107",
					"name": "SecurityDesc",
					"type": "STRING"
				},
				{
					"number": "108",
					"name": "HeartBtInt",
					"type": "INT"
				},
				{
					"number": "110",
					"name": "MinQty",
					"type": "QTY"
				},
				{
					"number": "111",
					"name": "MaxFloor",
					"type": "QTY"
				},
				{
					"number": "112",
					"name": "TestReqID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "113",
					"name": "ReportToExch",
					"type": "BOOLEAN"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "114",
					"name": "LocateReqd",
					"type": "BOOLEAN"
				},
				{
					"number": "115",
					"name": "OnBehalfOfCompID",
					"type": "STRING"
				},
				{
					"number": "116",
					"name": "OnBehalfOfSubID",
					"type": "STRING"
				},
				{
					"number": "117",
					"name": "QuoteID",
					"type": "STRING"
				},
				{
					"number": "118",
					"name": "NetMoney",
					"type": "AMT"
				},
				{
					"number": "119",
					"name": "SettlCurrAmt",
					"type": "AMT"
				},
				{
					"number": "120",
					"name": "SettlCurrency",
					"type": "CURRENCY"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "121",
					"name": "ForexReq",
					"type": "BOOLEAN"
				},
				{
					"number": "122",
					"name": "OrigSendingTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "123",
					"name": "GapFillFlag",
					"type": "BOOLEAN"
				},
				{
					"number": "124",
					"name": "NoExecs",
					"type": "NUMINGROUP"
				},
				{
					"number": "126",
					"name": "ExpireTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"value": [
						{
							"enum": "A",
							"description": "UNKNOWN_SYMBOL"
						},
						{
							"enum": "B",
							"description": "WRONG_SIDE"
						},
						{
							"enum": "C",
							"description": "QUANTITY_EXCEEDS_ORDER"
						},
						{
							"enum": "D",
							"description": "NO_MATCHING_ORDER"
						},
						{
							"enum": "E",
							"description": "PRICE_EXCEEDS_LIMIT"
						},
						{
							"enum": "F",
							"description": "CALCULATION_DIFFERENCE"
						},
						{
							"enum": "Z",
							"description": "OTHER"
						}
					],
					"number": "127",
					"name": "DKReason",
					"type": "CHAR"
				},
				{
					"number": "128",
					"name": "DeliverToCompID",
					"type": "STRING"
				},
				{
					"number": "129",
					"name": "DeliverToSubID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "130",
					"name": "IOINaturalFlag",
					"type": "BOOLEAN"
				},
				{
					"number": "131",
					"name": "QuoteReqID",
					"type": "STRING"
				},
				{
					"number": "132",
					"name": "BidPx",
					"type": "PRICE"
				},
				{
					"number": "133",
					"name": "OfferPx",
					"type": "PRICE"
				},
				{
					"number": "134",
					"name": "BidSize",
					"type": "QTY"
				},
				{
					"number": "135",
					"name": "OfferSize",
					"type": "QTY"
				},
				{
					"number": "136",
					"name": "NoMiscFees",
					"type": "NUMINGROUP"
				},
				{
					"number": "137",
					"name": "MiscFeeAmt",
					"type": "AMT"
				},
				{
					"number": "138",
					"name": "MiscFeeCurr",
					"type": "CURRENCY"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "REGULATORY"
						},
						{
							"enum": "2",
							"description": "TAX"
						},
						{
							"enum": "3",
							"description": "LOCAL_COMMISSION"
						},
						{
							"enum": "4",
							"description": "EXCHANGE_FEES"
						},
						{
							"enum": "5",
							"description": "STAMP"
						},
						{
							"enum": "6",
							"description": "LEVY"
						},
						{
							"enum": "7",
							"description": "OTHER"
						},
						{
							"enum": "8",
							"description": "MARKUP"
						},
						{
							"enum": "9",
							"description": "CONSUMPTION_TAX"
						},
						{
							"enum": "10",
							"description": "PER_TRANSACTION"
						},
						{
							"enum": "11",
							"description": "CONVERSION"
						},
						{
							"enum": "12",
							"description": "AGENT"
						}
					],
					"number": "139",
					"name": "MiscFeeType",
					"type": "CHAR"
				},
				{
					"number": "140",
					"name": "PrevClosePx",
					"type": "PRICE"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "141",
					"name": "ResetSeqNumFlag",
					"type": "BOOLEAN"
				},
				{
					"number": "142",
					"name": "SenderLocationID",
					"type": "STRING"
				},
				{
					"number": "143",
					"name": "TargetLocationID",
					"type": "STRING"
				},
				{
					"number": "144",
					"name": "OnBehalfOfLocationID",
					"type": "STRING"
				},
				{
					"number": "145",
					"name": "DeliverToLocationID",
					"type": "STRING"
				},
				{
					"number": "146",
					"name": "NoRelatedSym",
					"type": "NUMINGROUP"
				},
				{
					"number": "147",
					"name": "Subject",
					"type": "STRING"
				},
				{
					"number": "148",
					"name": "Headline",
					"type": "STRING"
				},
				{
					"number": "149",
					"name": "URLLink",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NEW"
						},
						{
							"enum": "3",
							"description": "DONE_FOR_DAY"
						},
						{
							"enum": "4",
							"description": "CANCELED"
						},
						{
							"enum": "5",
							"description": "REPLACE"
						},
						{
							"enum": "6",
							"description": "PENDING_CANCEL"
						},
						{
							"enum": "7",
							"description": "STOPPED"
						},
						{
							"enum": "8",
							"description": "REJECTED"
						},
						{
							"enum": "9",
							"description": "SUSPENDED"
						},
						{
							"enum": "A",
							"description": "PENDING_NEW"
						},
						{
							"enum": "B",
							"description": "CALCULATED"
						},
						{
							"enum": "C",
							"description": "EXPIRED"
						},
						{
							"enum": "D",
							"description": "RESTATED"
						},
						{
							"enum": "E",
							"description": "PENDING_REPLACE"
						},
						{
							"enum": "F",
							"description": "TRADE"
						},
						{
							"enum": "G",
							"description": "TRADE_CORRECT"
						},
						{
							"enum": "H",
							"description": "TRADE_CANCEL"
						},
						{
							"enum": "I",
							"description": "ORDER_STATUS"
						}
					],
					"number": "150",
					"name": "ExecType",
					"type": "CHAR"
				},
				{
					"number": "151",
					"name": "LeavesQty",
					"type": "QTY"
				},
				{
					"number": "152",
					"name": "CashOrderQty",
					"type": "QTY"
				},
				{
					"number": "153",
					"name": "AllocAvgPx",
					"type": "PRICE"
				},
				{
					"number": "154",
					"name": "AllocNetMoney",
					"type": "AMT"
				},
				{
					"number": "155",
					"name": "SettlCurrFxRate",
					"type": "FLOAT"
				},
				{
					"value": [
						{
							"enum": "M",
							"description": "MULTIPLY"
						},
						{
							"enum": "D",
							"description": "DIVIDE"
						}
					],
					"number": "156",
					"name": "SettlCurrFxRateCalc",
					"type": "CHAR"
				},
				{
					"number": "157",
					"name": "NumDaysInterest",
					"type": "INT"
				},
				{
					"number": "158",
					"name": "AccruedInterestRate",
					"type": "PERCENTAGE"
				},
				{
					"number": "159",
					"name": "AccruedInterestAmt",
					"type": "AMT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "STANDING_INSTRUCTIONS_PROVIDED"
						},
						{
							"enum": "4",
							"description": "SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT"
						},
						{
							"enum": "5",
							"description": "REQUEST_REJECT"
						}
					],
					"number": "160",
					"name": "SettlInstMode",
					"type": "CHAR"
				},
				{
					"number": "161",
					"name": "AllocText",
					"type": "STRING"
				},
				{
					"number": "162",
					"name": "SettlInstID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "N",
							"description": "NEW"
						},
						{
							"enum": "C",
							"description": "CANCEL"
						},
						{
							"enum": "R",
							"description": "REPLACE"
						},
						{
							"enum": "T",
							"description": "RESTATE"
						}
					],
					"number": "163",
					"name": "SettlInstTransType",
					"type": "CHAR"
				},
				{
					"number": "164",
					"name": "EmailThreadID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "BROKERS_INSTRUCTIONS"
						},
						{
							"enum": "2",
							"description": "INSTITUTIONS_INSTRUCTIONS"
						},
						{
							"enum": "3",
							"description": "INVESTOR"
						}
					],
					"number": "165",
					"name": "SettlInstSource",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "FUT",
							"description": "FUTURE"
						},
						{
							"enum": "OPT",
							"description": "OPTION"
						},
						{
							"enum": "EUSUPRA",
							"description": "EURO_SUPRANATIONAL_COUPONS"
						},
						{
							"enum": "FAC",
							"description": "FEDERAL_AGENCY_COUPON"
						},
						{
							"enum": "FADN",
							"description": "FEDERAL_AGENCY_DISCOUNT_NOTE"
						},
						{
							"enum": "PEF",
							"description": "PRIVATE_EXPORT_FUNDING"
						},
						{
							"enum": "SUPRA",
							"description": "USD_SUPRANATIONAL_COUPONS"
						},
						{
							"enum": "CORP",
							"description": "CORPORATE_BOND"
						},
						{
							"enum": "CPP",
							"description": "CORPORATE_PRIVATE_PLACEMENT"
						},
						{
							"enum": "CB",
							"description": "CONVERTIBLE_BOND"
						},
						{
							"enum": "DUAL",
							"description": "DUAL_CURRENCY"
						},
						{
							"enum": "EUCORP",
							"description": "EURO_CORPORATE_BOND"
						},
						{
							"enum": "XLINKD",
							"description": "INDEXED_LINKED"
						},
						{
							"enum": "STRUCT",
							"description": "STRUCTURED_NOTES"
						},
						{
							"enum": "YANK",
							"description": "YANKEE_CORPORATE_BOND"
						},
						{
							"enum": "FOR",
							"description": "FOREIGN_EXCHANGE_CONTRACT"
						},
						{
							"enum": "CS",
							"description": "COMMON_STOCK"
						},
						{
							"enum": "PS",
							"description": "PREFERRED_STOCK"
						},
						{
							"enum": "BRADY",
							"description": "BRADY_BOND"
						},
						{
							"enum": "EUSOV",
							"description": "EURO_SOVEREIGNS"
						},
						{
							"enum": "TBOND",
							"description": "US_TREASURY_BOND"
						},
						{
							"enum": "TINT",
							"description": "INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE"
						},
						{
							"enum": "TIPS",
							"description": "TREASURY_INFLATION_PROTECTED_SECURITIES"
						},
						{
							"enum": "TCAL",
							"description": "PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE"
						},
						{
							"enum": "TPRN",
							"description": "PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE"
						},
						{
							"enum": "UST",
							"description": "US_TREASURY_NOTE_UST"
						},
						{
							"enum": "USTB",
							"description": "US_TREASURY_BILL_USTB"
						},
						{
							"enum": "TNOTE",
							"description": "US_TREASURY_NOTE_TNOTE"
						},
						{
							"enum": "TBILL",
							"description": "US_TREASURY_BILL_TBILL"
						},
						{
							"enum": "REPO",
							"description": "REPURCHASE"
						},
						{
							"enum": "FORWARD",
							"description": "FORWARD"
						},
						{
							"enum": "BUYSELL",
							"description": "BUY_SELLBACK"
						},
						{
							"enum": "SECLOAN",
							"description": "SECURITIES_LOAN"
						},
						{
							"enum": "SECPLEDGE",
							"description": "SECURITIES_PLEDGE"
						},
						{
							"enum": "TERM",
							"description": "TERM_LOAN"
						},
						{
							"enum": "RVLV",
							"description": "REVOLVER_LOAN"
						},
						{
							"enum": "RVLVTRM",
							"description": "REVOLVER_TERM_LOAN"
						},
						{
							"enum": "BRIDGE",
							"description": "BRIDGE_LOAN"
						},
						{
							"enum": "LOFC",
							"description": "LETTER_OF_CREDIT"
						},
						{
							"enum": "SWING",
							"description": "SWING_LINE_FACILITY"
						},
						{
							"enum": "DINP",
							"description": "DEBTOR_IN_POSSESSION"
						},
						{
							"enum": "DEFLTED",
							"description": "DEFAULTED"
						},
						{
							"enum": "WITHDRN",
							"description": "WITHDRAWN"
						},
						{
							"enum": "REPLACD",
							"description": "REPLACED"
						},
						{
							"enum": "MATURED",
							"description": "MATURED"
						},
						{
							"enum": "AMENDED",
							"description": "AMENDED_RESTATED"
						},
						{
							"enum": "RETIRED",
							"description": "RETIRED"
						},
						{
							"enum": "BA",
							"description": "BANKERS_ACCEPTANCE"
						},
						{
							"enum": "BN",
							"description": "BANK_NOTES"
						},
						{
							"enum": "BOX",
							"description": "BILL_OF_EXCHANGES"
						},
						{
							"enum": "CD",
							"description": "CERTIFICATE_OF_DEPOSIT"
						},
						{
							"enum": "CL",
							"description": "CALL_LOANS"
						},
						{
							"enum": "CP",
							"description": "COMMERCIAL_PAPER"
						},
						{
							"enum": "DN",
							"description": "DEPOSIT_NOTES"
						},
						{
							"enum": "EUCD",
							"description": "EURO_CERTIFICATE_OF_DEPOSIT"
						},
						{
							"enum": "EUCP",
							"description": "EURO_COMMERCIAL_PAPER"
						},
						{
							"enum": "LQN",
							"description": "LIQUIDITY_NOTE"
						},
						{
							"enum": "MTN",
							"description": "MEDIUM_TERM_NOTES"
						},
						{
							"enum": "ONITE",
							"description": "OVERNIGHT"
						},
						{
							"enum": "PN",
							"description": "PROMISSORY_NOTE"
						},
						{
							"enum": "PZFJ",
							"description": "PLAZOS_FIJOS"
						},
						{
							"enum": "STN",
							"description": "SHORT_TERM_LOAN_NOTE"
						},
						{
							"enum": "TD",
							"description": "TIME_DEPOSIT"
						},
						{
							"enum": "XCN",
							"description": "EXTENDED_COMM_NOTE"
						},
						{
							"enum": "YCD",
							"description": "YANKEE_CERTIFICATE_OF_DEPOSIT"
						},
						{
							"enum": "ABS",
							"description": "ASSET_BACKED_SECURITIES"
						},
						{
							"enum": "CMBS",
							"description": "CORP_MORTGAGE_BACKED_SECURITIES"
						},
						{
							"enum": "CMO",
							"description": "COLLATERALIZED_MORTGAGE_OBLIGATION"
						},
						{
							"enum": "IET",
							"description": "IOETTE_MORTGAGE"
						},
						{
							"enum": "MBS",
							"description": "MORTGAGE_BACKED_SECURITIES"
						},
						{
							"enum": "MIO",
							"description": "MORTGAGE_INTEREST_ONLY"
						},
						{
							"enum": "MPO",
							"description": "MORTGAGE_PRINCIPAL_ONLY"
						},
						{
							"enum": "MPP",
							"description": "MORTGAGE_PRIVATE_PLACEMENT"
						},
						{
							"enum": "MPT",
							"description": "MISCELLANEOUS_PASS_THROUGH"
						},
						{
							"enum": "PFAND",
							"description": "PFANDBRIEFE"
						},
						{
							"enum": "TBA",
							"description": "TO_BE_ANNOUNCED"
						},
						{
							"enum": "AN",
							"description": "OTHER_ANTICIPATION_NOTES_BAN_GAN_ETC"
						},
						{
							"enum": "COFO",
							"description": "CERTIFICATE_OF_OBLIGATION"
						},
						{
							"enum": "COFP",
							"description": "CERTIFICATE_OF_PARTICIPATION"
						},
						{
							"enum": "GO",
							"description": "GENERAL_OBLIGATION_BONDS"
						},
						{
							"enum": "MT",
							"description": "MANDATORY_TENDER"
						},
						{
							"enum": "RAN",
							"description": "REVENUE_ANTICIPATION_NOTE"
						},
						{
							"enum": "REV",
							"description": "REVENUE_BONDS"
						},
						{
							"enum": "SPCLA",
							"description": "SPECIAL_ASSESSMENT"
						},
						{
							"enum": "SPCLO",
							"description": "SPECIAL_OBLIGATION"
						},
						{
							"enum": "SPCLT",
							"description": "SPECIAL_TAX"
						},
						{
							"enum": "TAN",
							"description": "TAX_ANTICIPATION_NOTE"
						},
						{
							"enum": "TAXA",
							"description": "TAX_ALLOCATION"
						},
						{
							"enum": "TECP",
							"description": "TAX_EXEMPT_COMMERCIAL_PAPER"
						},
						{
							"enum": "TRAN",
							"description": "TAX_REVENUE_ANTICIPATION_NOTE"
						},
						{
							"enum": "VRDN",
							"description": "VARIABLE_RATE_DEMAND_NOTE"
						},
						{
							"enum": "WAR",
							"description": "WARRANT"
						},
						{
							"enum": "MF",
							"description": "MUTUAL_FUND"
						},
						{
							"enum": "MLEG",
							"description": "MULTI_LEG_INSTRUMENT"
						},
						{
							"enum": "NONE",
							"description": "NO_SECURITY_TYPE"
						}
					],
					"number": "167",
					"name": "SecurityType",
					"type": "STRING"
				},
				{
					"number": "168",
					"name": "EffectiveTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "OTHER"
						},
						{
							"enum": "1",
							"description": "DTC_SID"
						},
						{
							"enum": "2",
							"description": "THOMSON_ALERT"
						},
						{
							"enum": "3",
							"description": "A_GLOBAL_CUSTODIAN"
						},
						{
							"enum": "4",
							"description": "ACCOUNTNET"
						}
					],
					"number": "169",
					"name": "StandInstDbType",
					"type": "INT"
				},
				{
					"number": "170",
					"name": "StandInstDbName",
					"type": "STRING"
				},
				{
					"number": "171",
					"name": "StandInstDbID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "VERSUS_PAYMENT_DELIVER"
						},
						{
							"enum": "1",
							"description": "FREE_DELIVER"
						},
						{
							"enum": "2",
							"description": "TRI_PARTY"
						},
						{
							"enum": "3",
							"description": "HOLD_IN_CUSTODY"
						}
					],
					"number": "172",
					"name": "SettlDeliveryType",
					"type": "INT"
				},
				{
					"number": "188",
					"name": "BidSpotRate",
					"type": "PRICE"
				},
				{
					"number": "189",
					"name": "BidForwardPoints",
					"type": "PRICEOFFSET"
				},
				{
					"number": "190",
					"name": "OfferSpotRate",
					"type": "PRICE"
				},
				{
					"number": "191",
					"name": "OfferForwardPoints",
					"type": "PRICEOFFSET"
				},
				{
					"number": "192",
					"name": "OrderQty2",
					"type": "QTY"
				},
				{
					"number": "193",
					"name": "SettlDate2",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "194",
					"name": "LastSpotRate",
					"type": "PRICE"
				},
				{
					"number": "195",
					"name": "LastForwardPoints",
					"type": "PRICEOFFSET"
				},
				{
					"number": "196",
					"name": "AllocLinkID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "F_X_NETTING"
						},
						{
							"enum": "1",
							"description": "F_X_SWAP"
						}
					],
					"number": "197",
					"name": "AllocLinkType",
					"type": "INT"
				},
				{
					"number": "198",
					"name": "SecondaryOrderID",
					"type": "STRING"
				},
				{
					"number": "199",
					"name": "NoIOIQualifiers",
					"type": "NUMINGROUP"
				},
				{
					"number": "200",
					"name": "MaturityMonthYear",
					"type": "MONTHYEAR"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "PUT"
						},
						{
							"enum": "1",
							"description": "CALL"
						}
					],
					"number": "201",
					"name": "PutOrCall",
					"type": "INT"
				},
				{
					"number": "202",
					"name": "StrikePrice",
					"type": "PRICE"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "COVERED"
						},
						{
							"enum": "1",
							"description": "UNCOVERED"
						}
					],
					"number": "203",
					"name": "CoveredOrUncovered",
					"type": "INT"
				},
				{
					"number": "206",
					"name": "OptAttribute",
					"type": "CHAR"
				},
				{
					"number": "207",
					"name": "SecurityExchange",
					"type": "EXCHANGE"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "208",
					"name": "NotifyBrokerOfCredit",
					"type": "BOOLEAN"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "MATCH"
						},
						{
							"enum": "2",
							"description": "FORWARD"
						},
						{
							"enum": "3",
							"description": "FORWARD_AND_MATCH"
						}
					],
					"number": "209",
					"name": "AllocHandlInst",
					"type": "INT"
				},
				{
					"number": "210",
					"name": "MaxShow",
					"type": "QTY"
				},
				{
					"number": "211",
					"name": "PegOffsetValue",
					"type": "FLOAT"
				},
				{
					"number": "212",
					"name": "XmlDataLen",
					"type": "LENGTH"
				},
				{
					"number": "213",
					"name": "XmlData",
					"type": "DATA"
				},
				{
					"number": "214",
					"name": "SettlInstRefID",
					"type": "STRING"
				},
				{
					"number": "215",
					"name": "NoRoutingIDs",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "TARGET_FIRM"
						},
						{
							"enum": "2",
							"description": "TARGET_LIST"
						},
						{
							"enum": "3",
							"description": "BLOCK_FIRM"
						},
						{
							"enum": "4",
							"description": "BLOCK_LIST"
						}
					],
					"number": "216",
					"name": "RoutingType",
					"type": "INT"
				},
				{
					"number": "217",
					"name": "RoutingID",
					"type": "STRING"
				},
				{
					"number": "218",
					"name": "Spread",
					"type": "PRICEOFFSET"
				},
				{
					"number": "220",
					"name": "BenchmarkCurveCurrency",
					"type": "CURRENCY"
				},
				{
					"number": "221",
					"name": "BenchmarkCurveName",
					"type": "STRING"
				},
				{
					"number": "222",
					"name": "BenchmarkCurvePoint",
					"type": "STRING"
				},
				{
					"number": "223",
					"name": "CouponRate",
					"type": "PERCENTAGE"
				},
				{
					"number": "224",
					"name": "CouponPaymentDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "225",
					"name": "IssueDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "226",
					"name": "RepurchaseTerm",
					"type": "INT"
				},
				{
					"number": "227",
					"name": "RepurchaseRate",
					"type": "PERCENTAGE"
				},
				{
					"number": "228",
					"name": "Factor",
					"type": "FLOAT"
				},
				{
					"number": "229",
					"name": "TradeOriginationDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "230",
					"name": "ExDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "231",
					"name": "ContractMultiplier",
					"type": "FLOAT"
				},
				{
					"number": "232",
					"name": "NoStipulations",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "AMT",
							"description": "AMT"
						},
						{
							"enum": "AUTOREINV",
							"description": "AUTO_REINVESTMENT_AT_RATE_OR_BETTER"
						},
						{
							"enum": "BANKQUAL",
							"description": "BANK_QUALIFIED"
						},
						{
							"enum": "BGNCON",
							"description": "BARGAIN_CONDITIONS_SEE"
						},
						{
							"enum": "COUPON",
							"description": "COUPON_RANGE"
						},
						{
							"enum": "CURRENCY",
							"description": "ISO_CURRENCY_CODE"
						},
						{
							"enum": "CUSTOMDATE",
							"description": "CUSTOM_START_END_DATE"
						},
						{
							"enum": "GEOG",
							"description": "GEOGRAPHICS_AND_RANGE"
						},
						{
							"enum": "HAIRCUT",
							"description": "VALUATION_DISCOUNT"
						},
						{
							"enum": "INSURED",
							"description": "INSURED"
						},
						{
							"enum": "ISSUE",
							"description": "YEAR_OR_YEAR_MONTH_OF_ISSUE"
						},
						{
							"enum": "ISSUER",
							"description": "ISSUERS_TICKER"
						},
						{
							"enum": "ISSUESIZE",
							"description": "ISSUE_SIZE_RANGE"
						},
						{
							"enum": "LOOKBACK",
							"description": "LOOKBACK_DAYS"
						},
						{
							"enum": "LOT",
							"description": "EXPLICIT_LOT_IDENTIFIER"
						},
						{
							"enum": "LOTVAR",
							"description": "LOT_VARIANCE"
						},
						{
							"enum": "MAT",
							"description": "MATURITY_YEAR_AND_MONTH"
						},
						{
							"enum": "MATURITY",
							"description": "MATURITY_RANGE"
						},
						{
							"enum": "MAXSUBS",
							"description": "MAXIMUM_SUBSTITUTIONS"
						},
						{
							"enum": "MINQTY",
							"description": "MINIMUM_QUANTITY"
						},
						{
							"enum": "MININCR",
							"description": "MINIMUM_INCREMENT"
						},
						{
							"enum": "MINDNOM",
							"description": "MINIMUM_DENOMINATION"
						},
						{
							"enum": "PAYFREQ",
							"description": "PAYMENT_FREQUENCY_CALENDAR"
						},
						{
							"enum": "PIECES",
							"description": "NUMBER_OF_PIECES"
						},
						{
							"enum": "PMAX",
							"description": "POOLS_MAXIMUM"
						},
						{
							"enum": "PPM",
							"description": "POOLS_PER_MILLION"
						},
						{
							"enum": "PPL",
							"description": "POOLS_PER_LOT"
						},
						{
							"enum": "PPT",
							"description": "POOLS_PER_TRADE"
						},
						{
							"enum": "PRICE",
							"description": "PRICE_RANGE"
						},
						{
							"enum": "PRICEFREQ",
							"description": "PRICING_FREQUENCY"
						},
						{
							"enum": "PROD",
							"description": "PRODUCTION_YEAR"
						},
						{
							"enum": "PROTECT",
							"description": "CALL_PROTECTION"
						},
						{
							"enum": "PURPOSE",
							"description": "PURPOSE"
						},
						{
							"enum": "PXSOURCE",
							"description": "BENCHMARK_PRICE_SOURCE"
						},
						{
							"enum": "RATING",
							"description": "RATING_SOURCE_AND_RANGE"
						},
						{
							"enum": "REDEMPTION",
							"description": "TYPE_OF_REDEMPTION_VALUES_ARE_NONCALLABLE_CALLABLE_PREFUNDED_ESCROWEDTOMATURITY_PUTABLE_CONVERTIBLE"
						},
						{
							"enum": "RESTRICTED",
							"description": "RESTRICTED"
						},
						{
							"enum": "SECTOR",
							"description": "MARKET_SECTOR"
						},
						{
							"enum": "SECTYPE",
							"description": "SECURITYTYPE_INCLUDED_OR_EXCLUDED"
						},
						{
							"enum": "STRUCT",
							"description": "STRUCTURE"
						},
						{
							"enum": "SUBSFREQ",
							"description": "SUBSTITUTIONS_FREQUENCY"
						},
						{
							"enum": "SUBSLEFT",
							"description": "SUBSTITUTIONS_LEFT"
						},
						{
							"enum": "TEXT",
							"description": "FREEFORM_TEXT"
						},
						{
							"enum": "TRDVAR",
							"description": "TRADE_VARIANCE"
						},
						{
							"enum": "WAC",
							"description": "WEIGHTED_AVERAGE_COUPONVALUE_IN_PERCENT"
						},
						{
							"enum": "WAL",
							"description": "WEIGHTED_AVERAGE_LIFE_COUPON_VALUE_IN_PERCENT"
						},
						{
							"enum": "WALA",
							"description": "WEIGHTED_AVERAGE_LOAN_AGE_VALUE_IN_MONTHS"
						},
						{
							"enum": "WAM",
							"description": "WEIGHTED_AVERAGE_MATURITY_VALUE_IN_MONTHS"
						},
						{
							"enum": "WHOLE",
							"description": "WHOLE_POOL"
						},
						{
							"enum": "YIELD",
							"description": "YIELD_RANGE"
						}
					],
					"number": "233",
					"name": "StipulationType",
					"type": "STRING"
				},
				{
					"number": "234",
					"name": "StipulationValue",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "AFTERTAX",
							"description": "AFTER_TAX_YIELD"
						},
						{
							"enum": "ANNUAL",
							"description": "ANNUAL_YIELD"
						},
						{
							"enum": "ATISSUE",
							"description": "YIELD_AT_ISSUE"
						},
						{
							"enum": "AVGMATURITY",
							"description": "YIELD_TO_AVERAGE_MATURITY"
						},
						{
							"enum": "BOOK",
							"description": "BOOK_YIELD"
						},
						{
							"enum": "CALL",
							"description": "YIELD_TO_NEXT_CALL"
						},
						{
							"enum": "CHANGE",
							"description": "YIELD_CHANGE_SINCE_CLOSE"
						},
						{
							"enum": "CLOSE",
							"description": "CLOSING_YIELD"
						},
						{
							"enum": "COMPOUND",
							"description": "COMPOUND_YIELD"
						},
						{
							"enum": "CURRENT",
							"description": "CURRENT_YIELD"
						},
						{
							"enum": "GROSS",
							"description": "TRUE_GROSS_YIELD"
						},
						{
							"enum": "GOVTEQUIV",
							"description": "GOVERNMENT_EQUIVALENT_YIELD"
						},
						{
							"enum": "INFLATION",
							"description": "YIELD_WITH_INFLATION_ASSUMPTION"
						},
						{
							"enum": "INVERSEFLOATER",
							"description": "INVERSE_FLOATER_BOND_YIELD"
						},
						{
							"enum": "LASTCLOSE",
							"description": "MOST_RECENT_CLOSING_YIELD"
						},
						{
							"enum": "LASTMONTH",
							"description": "CLOSING_YIELD_MOST_RECENT_MONTH"
						},
						{
							"enum": "LASTQUARTER",
							"description": "CLOSING_YIELD_MOST_RECENT_QUARTER"
						},
						{
							"enum": "LASTYEAR",
							"description": "CLOSING_YIELD_MOST_RECENT_YEAR"
						},
						{
							"enum": "LONGAVGLIFE",
							"description": "YIELD_TO_LONGEST_AVERAGE_LIFE"
						},
						{
							"enum": "MARK",
							"description": "MARK_TO_MARKET_YIELD"
						},
						{
							"enum": "MATURITY",
							"description": "YIELD_TO_MATURITY"
						},
						{
							"enum": "NEXTREFUND",
							"description": "YIELD_TO_NEXT_REFUND"
						},
						{
							"enum": "OPENAVG",
							"description": "OPEN_AVERAGE_YIELD"
						},
						{
							"enum": "PUT",
							"description": "YIELD_TO_NEXT_PUT"
						},
						{
							"enum": "PREVCLOSE",
							"description": "PREVIOUS_CLOSE_YIELD"
						},
						{
							"enum": "PROCEEDS",
							"description": "PROCEEDS_YIELD"
						},
						{
							"enum": "SEMIANNUAL",
							"description": "SEMI_ANNUAL_YIELD"
						},
						{
							"enum": "SHORTAVGLIFE",
							"description": "YIELD_TO_SHORTEST_AVERAGE_LIFE"
						},
						{
							"enum": "SIMPLE",
							"description": "SIMPLE_YIELD"
						},
						{
							"enum": "TAXEQUIV",
							"description": "TAX_EQUIVALENT_YIELD"
						},
						{
							"enum": "TENDER",
							"description": "YIELD_TO_TENDER_DATE"
						},
						{
							"enum": "TRUE",
							"description": "TRUE_YIELD"
						},
						{
							"enum": "VALUE1/32",
							"description": "YIELD_VALUE_OF_1_32"
						},
						{
							"enum": "WORST",
							"description": "YIELD_TO_WORST"
						}
					],
					"number": "235",
					"name": "YieldType",
					"type": "STRING"
				},
				{
					"number": "236",
					"name": "Yield",
					"type": "PERCENTAGE"
				},
				{
					"number": "237",
					"name": "TotalTakedown",
					"type": "AMT"
				},
				{
					"number": "238",
					"name": "Concession",
					"type": "AMT"
				},
				{
					"number": "239",
					"name": "RepoCollateralSecurityType",
					"type": "STRING"
				},
				{
					"number": "240",
					"name": "RedemptionDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "241",
					"name": "UnderlyingCouponPaymentDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "242",
					"name": "UnderlyingIssueDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "243",
					"name": "UnderlyingRepoCollateralSecurityType",
					"type": "STRING"
				},
				{
					"number": "244",
					"name": "UnderlyingRepurchaseTerm",
					"type": "INT"
				},
				{
					"number": "245",
					"name": "UnderlyingRepurchaseRate",
					"type": "PERCENTAGE"
				},
				{
					"number": "246",
					"name": "UnderlyingFactor",
					"type": "FLOAT"
				},
				{
					"number": "247",
					"name": "UnderlyingRedemptionDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "248",
					"name": "LegCouponPaymentDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "249",
					"name": "LegIssueDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "250",
					"name": "LegRepoCollateralSecurityType",
					"type": "STRING"
				},
				{
					"number": "251",
					"name": "LegRepurchaseTerm",
					"type": "INT"
				},
				{
					"number": "252",
					"name": "LegRepurchaseRate",
					"type": "PERCENTAGE"
				},
				{
					"number": "253",
					"name": "LegFactor",
					"type": "FLOAT"
				},
				{
					"number": "254",
					"name": "LegRedemptionDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "255",
					"name": "CreditRating",
					"type": "STRING"
				},
				{
					"number": "256",
					"name": "UnderlyingCreditRating",
					"type": "STRING"
				},
				{
					"number": "257",
					"name": "LegCreditRating",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "258",
					"name": "TradedFlatSwitch",
					"type": "BOOLEAN"
				},
				{
					"number": "259",
					"name": "BasisFeatureDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "260",
					"name": "BasisFeaturePrice",
					"type": "PRICE"
				},
				{
					"number": "262",
					"name": "MDReqID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "SNAPSHOT"
						},
						{
							"enum": "1",
							"description": "SNAPSHOT_PLUS_UPDATES"
						},
						{
							"enum": "2",
							"description": "DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST"
						}
					],
					"number": "263",
					"name": "SubscriptionRequestType",
					"type": "CHAR"
				},
				{
					"number": "264",
					"name": "MarketDepth",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "FULL_REFRESH"
						},
						{
							"enum": "1",
							"description": "INCREMENTAL_REFRESH"
						}
					],
					"number": "265",
					"name": "MDUpdateType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "266",
					"name": "AggregatedBook",
					"type": "BOOLEAN"
				},
				{
					"number": "267",
					"name": "NoMDEntryTypes",
					"type": "NUMINGROUP"
				},
				{
					"number": "268",
					"name": "NoMDEntries",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "BID"
						},
						{
							"enum": "1",
							"description": "OFFER"
						},
						{
							"enum": "2",
							"description": "TRADE"
						},
						{
							"enum": "3",
							"description": "INDEX_VALUE"
						},
						{
							"enum": "4",
							"description": "OPENING_PRICE"
						},
						{
							"enum": "5",
							"description": "CLOSING_PRICE"
						},
						{
							"enum": "6",
							"description": "SETTLEMENT_PRICE"
						},
						{
							"enum": "7",
							"description": "TRADING_SESSION_HIGH_PRICE"
						},
						{
							"enum": "8",
							"description": "TRADING_SESSION_LOW_PRICE"
						},
						{
							"enum": "9",
							"description": "TRADING_SESSION_VWAP_PRICE"
						},
						{
							"enum": "A",
							"description": "IMBALANCE"
						},
						{
							"enum": "B",
							"description": "TRADE_VOLUME"
						},
						{
							"enum": "C",
							"description": "OPEN_INTEREST"
						}
					],
					"number": "269",
					"name": "MDEntryType",
					"type": "CHAR"
				},
				{
					"number": "270",
					"name": "MDEntryPx",
					"type": "PRICE"
				},
				{
					"number": "271",
					"name": "MDEntrySize",
					"type": "QTY"
				},
				{
					"number": "272",
					"name": "MDEntryDate",
					"type": "UTCDATEONLY"
				},
				{
					"number": "273",
					"name": "MDEntryTime",
					"type": "UTCTIMEONLY"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "PLUS_TICK"
						},
						{
							"enum": "1",
							"description": "ZERO_PLUS_TICK"
						},
						{
							"enum": "2",
							"description": "MINUS_TICK"
						},
						{
							"enum": "3",
							"description": "ZERO_MINUS_TICK"
						}
					],
					"number": "274",
					"name": "TickDirection",
					"type": "CHAR"
				},
				{
					"number": "275",
					"name": "MDMkt",
					"type": "EXCHANGE"
				},
				{
					"value": [
						{
							"enum": "A",
							"description": "OPEN"
						},
						{
							"enum": "B",
							"description": "CLOSED"
						},
						{
							"enum": "C",
							"description": "EXCHANGE_BEST"
						},
						{
							"enum": "D",
							"description": "CONSOLIDATED_BEST"
						},
						{
							"enum": "E",
							"description": "LOCKED"
						},
						{
							"enum": "F",
							"description": "CROSSED"
						},
						{
							"enum": "G",
							"description": "DEPTH"
						},
						{
							"enum": "H",
							"description": "FAST_TRADING"
						},
						{
							"enum": "I",
							"description": "NON_FIRM"
						}
					],
					"number": "276",
					"name": "QuoteCondition",
					"type": "MULTIPLEVALUESTRING"
				},
				{
					"value": [
						{
							"enum": "A",
							"description": "CASH"
						},
						{
							"enum": "B",
							"description": "AVERAGE_PRICE_TRADE"
						},
						{
							"enum": "C",
							"description": "CASH_TRADE"
						},
						{
							"enum": "D",
							"description": "NEXT_DAY"
						},
						{
							"enum": "E",
							"description": "OPENING"
						},
						{
							"enum": "F",
							"description": "INTRADAY_TRADE_DETAIL"
						},
						{
							"enum": "G",
							"description": "RULE_127_TRADE"
						},
						{
							"enum": "H",
							"description": "RULE_155_TRADE"
						},
						{
							"enum": "I",
							"description": "SOLD_LAST"
						},
						{
							"enum": "J",
							"description": "NEXT_DAY_TRADE"
						},
						{
							"enum": "K",
							"description": "OPENED"
						},
						{
							"enum": "L",
							"description": "SELLER"
						},
						{
							"enum": "M",
							"description": "SOLD"
						},
						{
							"enum": "N",
							"description": "STOPPED_STOCK"
						},
						{
							"enum": "P",
							"description": "IMBALANCE_MORE_BUYERS"
						},
						{
							"enum": "Q",
							"description": "IMBALANCE_MORE_SELLERS"
						},
						{
							"enum": "R",
							"description": "OPENING_PRICE"
						}
					],
					"number": "277",
					"name": "TradeCondition",
					"type": "MULTIPLEVALUESTRING"
				},
				{
					"number": "278",
					"name": "MDEntryID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NEW"
						},
						{
							"enum": "1",
							"description": "CHANGE"
						},
						{
							"enum": "2",
							"description": "DELETE"
						}
					],
					"number": "279",
					"name": "MDUpdateAction",
					"type": "CHAR"
				},
				{
					"number": "280",
					"name": "MDEntryRefID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "UNKNOWN_SYMBOL"
						},
						{
							"enum": "1",
							"description": "DUPLICATE_MDREQID"
						},
						{
							"enum": "2",
							"description": "INSUFFICIENT_BANDWIDTH"
						},
						{
							"enum": "3",
							"description": "INSUFFICIENT_PERMISSIONS"
						},
						{
							"enum": "4",
							"description": "UNSUPPORTED_SUBSCRIPTIONREQUESTTYPE"
						},
						{
							"enum": "5",
							"description": "UNSUPPORTED_MARKETDEPTH"
						},
						{
							"enum": "6",
							"description": "UNSUPPORTED_MDUPDATETYPE"
						},
						{
							"enum": "7",
							"description": "UNSUPPORTED_AGGREGATEDBOOK"
						},
						{
							"enum": "8",
							"description": "UNSUPPORTED_MDENTRYTYPE"
						},
						{
							"enum": "9",
							"description": "UNSUPPORTED_TRADINGSESSIONID"
						},
						{
							"enum": "A",
							"description": "UNSUPPORTED_SCOPE"
						},
						{
							"enum": "B",
							"description": "UNSUPPORTED_OPENCLOSESETTLEFLAG"
						},
						{
							"enum": "C",
							"description": "UNSUPPORTED_MDIMPLICITDELETE"
						}
					],
					"number": "281",
					"name": "MDReqRejReason",
					"type": "CHAR"
				},
				{
					"number": "282",
					"name": "MDEntryOriginator",
					"type": "STRING"
				},
				{
					"number": "283",
					"name": "LocationID",
					"type": "STRING"
				},
				{
					"number": "284",
					"name": "DeskID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "CANCELATION"
						},
						{
							"enum": "1",
							"description": "ERROR"
						}
					],
					"number": "285",
					"name": "DeleteReason",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "DAILY_OPEN"
						},
						{
							"enum": "1",
							"description": "SESSION_OPEN"
						},
						{
							"enum": "2",
							"description": "DELIVERY_SETTLEMENT_ENTRY"
						},
						{
							"enum": "3",
							"description": "EXPECTED_ENTRY"
						},
						{
							"enum": "4",
							"description": "ENTRY_FROM_PREVIOUS_BUSINESS_DAY"
						},
						{
							"enum": "5",
							"description": "THEORETICAL_PRICE_VALUE"
						}
					],
					"number": "286",
					"name": "OpenCloseSettlFlag",
					"type": "MULTIPLEVALUESTRING"
				},
				{
					"number": "287",
					"name": "SellerDays",
					"type": "INT"
				},
				{
					"number": "288",
					"name": "MDEntryBuyer",
					"type": "STRING"
				},
				{
					"number": "289",
					"name": "MDEntrySeller",
					"type": "STRING"
				},
				{
					"number": "290",
					"name": "MDEntryPositionNo",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "BANKRUPT"
						},
						{
							"enum": "2",
							"description": "PENDING_DELISTING"
						}
					],
					"number": "291",
					"name": "FinancialStatus",
					"type": "MULTIPLEVALUESTRING"
				},
				{
					"value": [
						{
							"enum": "A",
							"description": "EX_DIVIDEND"
						},
						{
							"enum": "B",
							"description": "EX_DISTRIBUTION"
						},
						{
							"enum": "C",
							"description": "EX_RIGHTS"
						},
						{
							"enum": "D",
							"description": "NEW"
						},
						{
							"enum": "E",
							"description": "EX_INTEREST"
						}
					],
					"number": "292",
					"name": "CorporateAction",
					"type": "MULTIPLEVALUESTRING"
				},
				{
					"number": "293",
					"name": "DefBidSize",
					"type": "QTY"
				},
				{
					"number": "294",
					"name": "DefOfferSize",
					"type": "QTY"
				},
				{
					"number": "295",
					"name": "NoQuoteEntries",
					"type": "NUMINGROUP"
				},
				{
					"number": "296",
					"name": "NoQuoteSets",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "ACCEPTED"
						},
						{
							"enum": "1",
							"description": "CANCELED_FOR_SYMBOL"
						},
						{
							"enum": "2",
							"description": "CANCELED_FOR_SECURITY_TYPE"
						},
						{
							"enum": "3",
							"description": "CANCELED_FOR_UNDERLYING"
						},
						{
							"enum": "4",
							"description": "CANCELED_ALL"
						},
						{
							"enum": "5",
							"description": "REJECTED"
						},
						{
							"enum": "6",
							"description": "REMOVED_FROM_MARKET"
						},
						{
							"enum": "7",
							"description": "EXPIRED"
						},
						{
							"enum": "8",
							"description": "QUERY"
						},
						{
							"enum": "9",
							"description": "QUOTE_NOT_FOUND"
						},
						{
							"enum": "10",
							"description": "PENDING"
						},
						{
							"enum": "11",
							"description": "PASS"
						},
						{
							"enum": "12",
							"description": "LOCKED_MARKET_WARNING"
						},
						{
							"enum": "13",
							"description": "CROSS_MARKET_WARNING"
						},
						{
							"enum": "14",
							"description": "CANCELED_DUE_TO_LOCK_MARKET"
						},
						{
							"enum": "15",
							"description": "CANCELED_DUE_TO_CROSS_MARKET"
						}
					],
					"number": "297",
					"name": "QuoteStatus",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "CANCEL_FOR_SYMBOL"
						},
						{
							"enum": "2",
							"description": "CANCEL_FOR_SECURITY_TYPE"
						},
						{
							"enum": "3",
							"description": "CANCEL_FOR_UNDERLYING_SYMBOL"
						},
						{
							"enum": "4",
							"description": "CANCEL_ALL_QUOTES"
						}
					],
					"number": "298",
					"name": "QuoteCancelType",
					"type": "INT"
				},
				{
					"number": "299",
					"name": "QuoteEntryID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "UNKNOWN_SYMBOL"
						},
						{
							"enum": "2",
							"description": "EXCHANGE"
						},
						{
							"enum": "3",
							"description": "QUOTE_REQUEST_EXCEEDS_LIMIT"
						},
						{
							"enum": "4",
							"description": "TOO_LATE_TO_ENTER"
						},
						{
							"enum": "5",
							"description": "UNKNOWN_QUOTE"
						},
						{
							"enum": "6",
							"description": "DUPLICATE_QUOTE"
						},
						{
							"enum": "7",
							"description": "INVALID_BID_ASK_SPREAD"
						},
						{
							"enum": "8",
							"description": "INVALID_PRICE"
						},
						{
							"enum": "9",
							"description": "NOT_AUTHORIZED_TO_QUOTE_SECURITY"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "300",
					"name": "QuoteRejectReason",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NO_ACKNOWLEDGEMENT"
						},
						{
							"enum": "1",
							"description": "ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES"
						},
						{
							"enum": "2",
							"description": "ACKNOWLEDGE_EACH_QUOTE_MESSAGES"
						}
					],
					"number": "301",
					"name": "QuoteResponseLevel",
					"type": "INT"
				},
				{
					"number": "302",
					"name": "QuoteSetID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "MANUAL"
						},
						{
							"enum": "2",
							"description": "AUTOMATIC"
						}
					],
					"number": "303",
					"name": "QuoteRequestType",
					"type": "INT"
				},
				{
					"number": "304",
					"name": "TotNoQuoteEntries",
					"type": "INT"
				},
				{
					"number": "305",
					"name": "UnderlyingSecurityIDSource",
					"type": "STRING"
				},
				{
					"number": "306",
					"name": "UnderlyingIssuer",
					"type": "STRING"
				},
				{
					"number": "307",
					"name": "UnderlyingSecurityDesc",
					"type": "STRING"
				},
				{
					"number": "308",
					"name": "UnderlyingSecurityExchange",
					"type": "EXCHANGE"
				},
				{
					"number": "309",
					"name": "UnderlyingSecurityID",
					"type": "STRING"
				},
				{
					"number": "310",
					"name": "UnderlyingSecurityType",
					"type": "STRING"
				},
				{
					"number": "311",
					"name": "UnderlyingSymbol",
					"type": "STRING"
				},
				{
					"number": "312",
					"name": "UnderlyingSymbolSfx",
					"type": "STRING"
				},
				{
					"number": "313",
					"name": "UnderlyingMaturityMonthYear",
					"type": "MONTHYEAR"
				},
				{
					"number": "315",
					"name": "UnderlyingPutOrCall",
					"type": "INT"
				},
				{
					"number": "316",
					"name": "UnderlyingStrikePrice",
					"type": "PRICE"
				},
				{
					"number": "317",
					"name": "UnderlyingOptAttribute",
					"type": "CHAR"
				},
				{
					"number": "318",
					"name": "UnderlyingCurrency",
					"type": "CURRENCY"
				},
				{
					"number": "320",
					"name": "SecurityReqID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "REQUEST_SECURITY_IDENTITY_AND_SPECIFICATIONS"
						},
						{
							"enum": "1",
							"description": "REQUEST_SECURITY_IDENTITY_FOR_THE_SPECIFICATIONS_PROVIDED"
						},
						{
							"enum": "2",
							"description": "REQUEST_LIST_SECURITY_TYPES"
						},
						{
							"enum": "3",
							"description": "REQUEST_LIST_SECURITIES"
						}
					],
					"number": "321",
					"name": "SecurityRequestType",
					"type": "INT"
				},
				{
					"number": "322",
					"name": "SecurityResponseID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "ACCEPT_SECURITY_PROPOSAL_AS_IS"
						},
						{
							"enum": "2",
							"description": "ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE"
						},
						{
							"enum": "5",
							"description": "REJECT_SECURITY_PROPOSAL"
						},
						{
							"enum": "6",
							"description": "CAN_NOT_MATCH_SELECTION_CRITERIA"
						}
					],
					"number": "323",
					"name": "SecurityResponseType",
					"type": "INT"
				},
				{
					"number": "324",
					"name": "SecurityStatusReqID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "325",
					"name": "UnsolicitedIndicator",
					"type": "BOOLEAN"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "OPENING_DELAY"
						},
						{
							"enum": "2",
							"description": "TRADING_HALT"
						},
						{
							"enum": "3",
							"description": "RESUME"
						},
						{
							"enum": "4",
							"description": "NO_OPEN_NO_RESUME"
						},
						{
							"enum": "5",
							"description": "PRICE_INDICATION"
						},
						{
							"enum": "6",
							"description": "TRADING_RANGE_INDICATION"
						},
						{
							"enum": "7",
							"description": "MARKET_IMBALANCE_BUY"
						},
						{
							"enum": "8",
							"description": "MARKET_IMBALANCE_SELL"
						},
						{
							"enum": "9",
							"description": "MARKET_ON_CLOSE_IMBALANCE_BUY"
						},
						{
							"enum": "10",
							"description": "MARKET_ON_CLOSE_IMBALANCE_SELL"
						},
						{
							"enum": "12",
							"description": "NO_MARKET_IMBALANCE"
						},
						{
							"enum": "13",
							"description": "NO_MARKET_ON_CLOSE_IMBALANCE"
						},
						{
							"enum": "14",
							"description": "ITS_PRE_OPENING"
						},
						{
							"enum": "15",
							"description": "NEW_PRICE_INDICATION"
						},
						{
							"enum": "16",
							"description": "TRADE_DISSEMINATION_TIME"
						},
						{
							"enum": "17",
							"description": "READY_TO_TRADE"
						},
						{
							"enum": "18",
							"description": "NOT_AVAILABLE_FOR_TRADING"
						},
						{
							"enum": "19",
							"description": "NOT_TRADED_ON_THIS_MARKET"
						},
						{
							"enum": "20",
							"description": "UNKNOWN_OR_INVALID"
						},
						{
							"enum": "21",
							"description": "PRE_OPEN"
						},
						{
							"enum": "22",
							"description": "OPENING_ROTATION"
						},
						{
							"enum": "23",
							"description": "FAST_MARKET"
						}
					],
					"number": "326",
					"name": "SecurityTradingStatus",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "I",
							"description": "ORDER_IMBALANCE"
						},
						{
							"enum": "X",
							"description": "EQUIPMENT_CHANGEOVER"
						},
						{
							"enum": "P",
							"description": "NEWS_PENDING"
						},
						{
							"enum": "D",
							"description": "NEWS_DISSEMINATION"
						},
						{
							"enum": "E",
							"description": "ORDER_INFLUX"
						},
						{
							"enum": "M",
							"description": "ADDITIONAL_INFORMATION"
						}
					],
					"number": "327",
					"name": "HaltReasonChar",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "328",
					"name": "InViewOfCommon",
					"type": "BOOLEAN"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "329",
					"name": "DueToRelated",
					"type": "BOOLEAN"
				},
				{
					"number": "330",
					"name": "BuyVolume",
					"type": "QTY"
				},
				{
					"number": "331",
					"name": "SellVolume",
					"type": "QTY"
				},
				{
					"number": "332",
					"name": "HighPx",
					"type": "PRICE"
				},
				{
					"number": "333",
					"name": "LowPx",
					"type": "PRICE"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "CANCEL"
						},
						{
							"enum": "2",
							"description": "ERROR"
						},
						{
							"enum": "3",
							"description": "CORRECTION"
						}
					],
					"number": "334",
					"name": "Adjustment",
					"type": "INT"
				},
				{
					"number": "335",
					"name": "TradSesReqID",
					"type": "STRING"
				},
				{
					"number": "336",
					"name": "TradingSessionID",
					"type": "STRING"
				},
				{
					"number": "337",
					"name": "ContraTrader",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "ELECTRONIC"
						},
						{
							"enum": "2",
							"description": "OPEN_OUTCRY"
						},
						{
							"enum": "3",
							"description": "TWO_PARTY"
						}
					],
					"number": "338",
					"name": "TradSesMethod",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "TESTING"
						},
						{
							"enum": "2",
							"description": "SIMULATED"
						},
						{
							"enum": "3",
							"description": "PRODUCTION"
						}
					],
					"number": "339",
					"name": "TradSesMode",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "UNKNOWN"
						},
						{
							"enum": "1",
							"description": "HALTED"
						},
						{
							"enum": "2",
							"description": "OPEN"
						},
						{
							"enum": "3",
							"description": "CLOSED"
						},
						{
							"enum": "4",
							"description": "PRE_OPEN"
						},
						{
							"enum": "5",
							"description": "PRE_CLOSE"
						},
						{
							"enum": "6",
							"description": "REQUEST_REJECTED"
						}
					],
					"number": "340",
					"name": "TradSesStatus",
					"type": "INT"
				},
				{
					"number": "341",
					"name": "TradSesStartTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "342",
					"name": "TradSesOpenTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "343",
					"name": "TradSesPreCloseTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "344",
					"name": "TradSesCloseTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "345",
					"name": "TradSesEndTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "346",
					"name": "NumberOfOrders",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "ISO-2022-JP",
							"description": "JIS"
						},
						{
							"enum": "EUC-JP",
							"description": "EUC"
						},
						{
							"enum": "Shift_JIS",
							"description": "FOR_USING_SJIS"
						},
						{
							"enum": "UTF-8",
							"description": "UNICODE"
						}
					],
					"number": "347",
					"name": "MessageEncoding",
					"type": "STRING"
				},
				{
					"number": "348",
					"name": "EncodedIssuerLen",
					"type": "LENGTH"
				},
				{
					"number": "349",
					"name": "EncodedIssuer",
					"type": "DATA"
				},
				{
					"number": "350",
					"name": "EncodedSecurityDescLen",
					"type": "LENGTH"
				},
				{
					"number": "351",
					"name": "EncodedSecurityDesc",
					"type": "DATA"
				},
				{
					"number": "352",
					"name": "EncodedListExecInstLen",
					"type": "LENGTH"
				},
				{
					"number": "353",
					"name": "EncodedListExecInst",
					"type": "DATA"
				},
				{
					"number": "354",
					"name": "EncodedTextLen",
					"type": "LENGTH"
				},
				{
					"number": "355",
					"name": "EncodedText",
					"type": "DATA"
				},
				{
					"number": "356",
					"name": "EncodedSubjectLen",
					"type": "LENGTH"
				},
				{
					"number": "357",
					"name": "EncodedSubject",
					"type": "DATA"
				},
				{
					"number": "358",
					"name": "EncodedHeadlineLen",
					"type": "LENGTH"
				},
				{
					"number": "359",
					"name": "EncodedHeadline",
					"type": "DATA"
				},
				{
					"number": "360",
					"name": "EncodedAllocTextLen",
					"type": "LENGTH"
				},
				{
					"number": "361",
					"name": "EncodedAllocText",
					"type": "DATA"
				},
				{
					"number": "362",
					"name": "EncodedUnderlyingIssuerLen",
					"type": "LENGTH"
				},
				{
					"number": "363",
					"name": "EncodedUnderlyingIssuer",
					"type": "DATA"
				},
				{
					"number": "364",
					"name": "EncodedUnderlyingSecurityDescLen",
					"type": "LENGTH"
				},
				{
					"number": "365",
					"name": "EncodedUnderlyingSecurityDesc",
					"type": "DATA"
				},
				{
					"number": "366",
					"name": "AllocPrice",
					"type": "PRICE"
				},
				{
					"number": "367",
					"name": "QuoteSetValidUntilTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "368",
					"name": "QuoteEntryRejectReason",
					"type": "INT"
				},
				{
					"number": "369",
					"name": "LastMsgSeqNumProcessed",
					"type": "SEQNUM"
				},
				{
					"number": "371",
					"name": "RefTagID",
					"type": "INT"
				},
				{
					"number": "372",
					"name": "RefMsgType",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "INVALID_TAG_NUMBER"
						},
						{
							"enum": "1",
							"description": "REQUIRED_TAG_MISSING"
						},
						{
							"enum": "2",
							"description": "TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE"
						},
						{
							"enum": "3",
							"description": "UNDEFINED_TAG"
						},
						{
							"enum": "4",
							"description": "TAG_SPECIFIED_WITHOUT_A_VALUE"
						},
						{
							"enum": "5",
							"description": "VALUE_IS_INCORRECT"
						},
						{
							"enum": "6",
							"description": "INCORRECT_DATA_FORMAT_FOR_VALUE"
						},
						{
							"enum": "7",
							"description": "DECRYPTION_PROBLEM"
						},
						{
							"enum": "8",
							"description": "SIGNATURE_PROBLEM"
						},
						{
							"enum": "9",
							"description": "COMPID_PROBLEM"
						},
						{
							"enum": "10",
							"description": "SENDINGTIME_ACCURACY_PROBLEM"
						},
						{
							"enum": "11",
							"description": "INVALID_MSGTYPE"
						},
						{
							"enum": "12",
							"description": "XML_VALIDATION_ERROR"
						},
						{
							"enum": "13",
							"description": "TAG_APPEARS_MORE_THAN_ONCE"
						},
						{
							"enum": "14",
							"description": "TAG_SPECIFIED_OUT_OF_REQUIRED_ORDER"
						},
						{
							"enum": "15",
							"description": "REPEATING_GROUP_FIELDS_OUT_OF_ORDER"
						},
						{
							"enum": "16",
							"description": "INCORRECT_NUMINGROUP_COUNT_FOR_REPEATING_GROUP"
						},
						{
							"enum": "17",
							"description": "NON_DATA_VALUE_INCLUDES_FIELD_DELIMITER"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "373",
					"name": "SessionRejectReason",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "N",
							"description": "NEW"
						},
						{
							"enum": "C",
							"description": "CANCEL"
						}
					],
					"number": "374",
					"name": "BidRequestTransType",
					"type": "CHAR"
				},
				{
					"number": "375",
					"name": "ContraBroker",
					"type": "STRING"
				},
				{
					"number": "376",
					"name": "ComplianceID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "377",
					"name": "SolicitedFlag",
					"type": "BOOLEAN"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "GT_CORPORATE_ACTION"
						},
						{
							"enum": "1",
							"description": "GT_RENEWAL"
						},
						{
							"enum": "2",
							"description": "VERBAL_CHANGE"
						},
						{
							"enum": "3",
							"description": "REPRICING_OF_ORDER"
						},
						{
							"enum": "4",
							"description": "BROKER_OPTION"
						},
						{
							"enum": "5",
							"description": "PARTIAL_DECLINE_OF_ORDERQTY"
						},
						{
							"enum": "6",
							"description": "CANCEL_ON_TRADING_HALT"
						},
						{
							"enum": "7",
							"description": "CANCEL_ON_SYSTEM_FAILURE"
						},
						{
							"enum": "8",
							"description": "MARKET"
						},
						{
							"enum": "9",
							"description": "CANCELED_NOT_BEST"
						},
						{
							"enum": "10",
							"description": "WAREHOUSE_RECAP"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "378",
					"name": "ExecRestatementReason",
					"type": "INT"
				},
				{
					"number": "379",
					"name": "BusinessRejectRefID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "OTHER"
						},
						{
							"enum": "1",
							"description": "UNKOWN_ID"
						},
						{
							"enum": "2",
							"description": "UNKNOWN_SECURITY"
						},
						{
							"enum": "3",
							"description": "UNSUPPORTED_MESSAGE_TYPE"
						},
						{
							"enum": "4",
							"description": "APPLICATION_NOT_AVAILABLE"
						},
						{
							"enum": "5",
							"description": "CONDITIONALLY_REQUIRED_FIELD_MISSING"
						},
						{
							"enum": "6",
							"description": "NOT_AUTHORIZED"
						},
						{
							"enum": "7",
							"description": "DELIVERTO_FIRM_NOT_AVAILABLE_AT_THIS_TIME"
						}
					],
					"number": "380",
					"name": "BusinessRejectReason",
					"type": "INT"
				},
				{
					"number": "381",
					"name": "GrossTradeAmt",
					"type": "AMT"
				},
				{
					"number": "382",
					"name": "NoContraBrokers",
					"type": "NUMINGROUP"
				},
				{
					"number": "383",
					"name": "MaxMessageSize",
					"type": "LENGTH"
				},
				{
					"number": "384",
					"name": "NoMsgTypes",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "S",
							"description": "SEND"
						},
						{
							"enum": "R",
							"description": "RECEIVE"
						}
					],
					"number": "385",
					"name": "MsgDirection",
					"type": "CHAR"
				},
				{
					"number": "386",
					"name": "NoTradingSessions",
					"type": "NUMINGROUP"
				},
				{
					"number": "387",
					"name": "TotalVolumeTraded",
					"type": "QTY"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "RELATED_TO_DISPLAYED_PRICE"
						},
						{
							"enum": "1",
							"description": "RELATED_TO_MARKET_PRICE"
						},
						{
							"enum": "2",
							"description": "RELATED_TO_PRIMARY_PRICE"
						},
						{
							"enum": "3",
							"description": "RELATED_TO_LOCAL_PRIMARY_PRICE"
						},
						{
							"enum": "4",
							"description": "RELATED_TO_MIDPOINT_PRICE"
						},
						{
							"enum": "5",
							"description": "RELATED_TO_LAST_TRADE_PRICE"
						},
						{
							"enum": "6",
							"description": "RELATED_TO_VWAP"
						}
					],
					"number": "388",
					"name": "DiscretionInst",
					"type": "CHAR"
				},
				{
					"number": "389",
					"name": "DiscretionOffsetValue",
					"type": "FLOAT"
				},
				{
					"number": "390",
					"name": "BidID",
					"type": "STRING"
				},
				{
					"number": "391",
					"name": "ClientBidID",
					"type": "STRING"
				},
				{
					"number": "392",
					"name": "ListName",
					"type": "STRING"
				},
				{
					"number": "393",
					"name": "TotNoRelatedSym",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "NON_DISCLOSED_STYLE"
						},
						{
							"enum": "2",
							"description": "DISCLOSED_STYLE"
						},
						{
							"enum": "3",
							"description": "NO_BIDDING_PROCESS"
						}
					],
					"number": "394",
					"name": "BidType",
					"type": "INT"
				},
				{
					"number": "395",
					"name": "NumTickets",
					"type": "INT"
				},
				{
					"number": "396",
					"name": "SideValue1",
					"type": "AMT"
				},
				{
					"number": "397",
					"name": "SideValue2",
					"type": "AMT"
				},
				{
					"number": "398",
					"name": "NoBidDescriptors",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "SECTOR"
						},
						{
							"enum": "2",
							"description": "COUNTRY"
						},
						{
							"enum": "3",
							"description": "INDEX"
						}
					],
					"number": "399",
					"name": "BidDescriptorType",
					"type": "INT"
				},
				{
					"number": "400",
					"name": "BidDescriptor",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "SIDEVALUE1"
						},
						{
							"enum": "2",
							"description": "SIDEVALUE_2"
						}
					],
					"number": "401",
					"name": "SideValueInd",
					"type": "INT"
				},
				{
					"number": "402",
					"name": "LiquidityPctLow",
					"type": "PERCENTAGE"
				},
				{
					"number": "403",
					"name": "LiquidityPctHigh",
					"type": "PERCENTAGE"
				},
				{
					"number": "404",
					"name": "LiquidityValue",
					"type": "AMT"
				},
				{
					"number": "405",
					"name": "EFPTrackingError",
					"type": "PERCENTAGE"
				},
				{
					"number": "406",
					"name": "FairValue",
					"type": "AMT"
				},
				{
					"number": "407",
					"name": "OutsideIndexPct",
					"type": "PERCENTAGE"
				},
				{
					"number": "408",
					"name": "ValueOfFutures",
					"type": "AMT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "5DAY_MOVING_AVERAGE"
						},
						{
							"enum": "2",
							"description": "20_DAY_MOVING_AVERAGE"
						},
						{
							"enum": "3",
							"description": "NORMAL_MARKET_SIZE"
						},
						{
							"enum": "4",
							"description": "OTHER"
						}
					],
					"number": "409",
					"name": "LiquidityIndType",
					"type": "INT"
				},
				{
					"number": "410",
					"name": "WtAverageLiquidity",
					"type": "PERCENTAGE"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "411",
					"name": "ExchangeForPhysical",
					"type": "BOOLEAN"
				},
				{
					"number": "412",
					"name": "OutMainCntryUIndex",
					"type": "AMT"
				},
				{
					"number": "413",
					"name": "CrossPercent",
					"type": "PERCENTAGE"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "BUYSIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUSREQUEST"
						},
						{
							"enum": "2",
							"description": "SELLSIDE_PERIODICALLY_SENDS_STATUS_USING_LISTSTATUS_PERIOD_OPTIONALLY_SPECIFIED_IN_PROGRESSPERIOD"
						},
						{
							"enum": "3",
							"description": "REAL_TIME_EXECUTION_REPORTS"
						}
					],
					"number": "414",
					"name": "ProgRptReqs",
					"type": "INT"
				},
				{
					"number": "415",
					"name": "ProgPeriodInterval",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "NET"
						},
						{
							"enum": "2",
							"description": "GROSS"
						}
					],
					"number": "416",
					"name": "IncTaxInd",
					"type": "INT"
				},
				{
					"number": "417",
					"name": "NumBidders",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "R",
							"description": "RISK_TRADE"
						},
						{
							"enum": "G",
							"description": "VWAP_GUARANTEE"
						},
						{
							"enum": "A",
							"description": "AGENCY"
						},
						{
							"enum": "J",
							"description": "GUARANTEED_CLOSE"
						}
					],
					"number": "418",
					"name": "BidTradeType",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "2",
							"description": "CLOSING_PRICE_AT_MORNING_SESSION"
						},
						{
							"enum": "3",
							"description": "CLOSING_PRICE"
						},
						{
							"enum": "4",
							"description": "CURRENT_PRICE"
						},
						{
							"enum": "5",
							"description": "SQ"
						},
						{
							"enum": "6",
							"description": "VWAP_THROUGH_A_DAY"
						},
						{
							"enum": "7",
							"description": "VWAP_THROUGH_A_MORNING_SESSION"
						},
						{
							"enum": "8",
							"description": "VWAP_THROUGH_AN_AFTERNOON_SESSION"
						},
						{
							"enum": "9",
							"description": "VWAP_THROUGH_A_DAY_EXCEPT_YORI"
						},
						{
							"enum": "A",
							"description": "VWAP_THROUGH_A_MORNING_SESSION_EXCEPT_YORI"
						},
						{
							"enum": "B",
							"description": "VWAP_THROUGH_AN_AFTERNOON_SESSION_EXCEPT_YORI"
						},
						{
							"enum": "C",
							"description": "STRIKE"
						},
						{
							"enum": "D",
							"description": "OPEN"
						},
						{
							"enum": "Z",
							"description": "OTHERS"
						}
					],
					"number": "419",
					"name": "BasisPxType",
					"type": "CHAR"
				},
				{
					"number": "420",
					"name": "NoBidComponents",
					"type": "NUMINGROUP"
				},
				{
					"number": "421",
					"name": "Country",
					"type": "COUNTRY"
				},
				{
					"number": "422",
					"name": "TotNoStrikes",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "PERCENTAGE"
						},
						{
							"enum": "2",
							"description": "PER_UNIT"
						},
						{
							"enum": "3",
							"description": "FIXED_AMOUNT"
						},
						{
							"enum": "4",
							"description": "DISCOUNT_PERCENTAGE_POINTS_BELOW_PAR"
						},
						{
							"enum": "5",
							"description": "PREMIUM_PERCENTAGE_POINTS_OVER_PAR"
						},
						{
							"enum": "6",
							"description": "SPREAD"
						},
						{
							"enum": "7",
							"description": "TED_PRICE"
						},
						{
							"enum": "8",
							"description": "TED_YIELD"
						},
						{
							"enum": "9",
							"description": "YIELD"
						},
						{
							"enum": "10",
							"description": "FIXED_CABINET_TRADE_PRICE"
						},
						{
							"enum": "11",
							"description": "VARIABLE_CABINET_TRADE_PRICE"
						}
					],
					"number": "423",
					"name": "PriceType",
					"type": "INT"
				},
				{
					"number": "424",
					"name": "DayOrderQty",
					"type": "QTY"
				},
				{
					"number": "425",
					"name": "DayCumQty",
					"type": "QTY"
				},
				{
					"number": "426",
					"name": "DayAvgPx",
					"type": "PRICE"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION"
						},
						{
							"enum": "1",
							"description": "ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES"
						},
						{
							"enum": "2",
							"description": "ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE"
						}
					],
					"number": "427",
					"name": "GTBookingInst",
					"type": "INT"
				},
				{
					"number": "428",
					"name": "NoStrikes",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "ACK"
						},
						{
							"enum": "2",
							"description": "RESPONSE"
						},
						{
							"enum": "3",
							"description": "TIMED"
						},
						{
							"enum": "4",
							"description": "EXECSTARTED"
						},
						{
							"enum": "5",
							"description": "ALLDONE"
						},
						{
							"enum": "6",
							"description": "ALERT"
						}
					],
					"number": "429",
					"name": "ListStatusType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "NET"
						},
						{
							"enum": "2",
							"description": "GROSS"
						}
					],
					"number": "430",
					"name": "NetGrossInd",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "INBIDDINGPROCESS"
						},
						{
							"enum": "2",
							"description": "RECEIVEDFOREXECUTION"
						},
						{
							"enum": "3",
							"description": "EXECUTING"
						},
						{
							"enum": "4",
							"description": "CANCELING"
						},
						{
							"enum": "5",
							"description": "ALERT"
						},
						{
							"enum": "6",
							"description": "ALL_DONE"
						},
						{
							"enum": "7",
							"description": "REJECT"
						}
					],
					"number": "431",
					"name": "ListOrderStatus",
					"type": "INT"
				},
				{
					"number": "432",
					"name": "ExpireDate",
					"type": "LOCALMKTDATE"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "IMMEDIATE"
						},
						{
							"enum": "2",
							"description": "WAIT_FOR_EXECUTE_INSTRUCTION"
						},
						{
							"enum": "3",
							"description": "EXCHANGE_SWITCH_CIV_ORDER_SELL_DRIVEN"
						},
						{
							"enum": "4",
							"description": "EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_TOP_UP"
						},
						{
							"enum": "5",
							"description": "EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_WITHDRAW"
						}
					],
					"number": "433",
					"name": "ListExecInstType",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "ORDER_CANCEL_REQUEST"
						},
						{
							"enum": "2",
							"description": "ORDER_CANCEL_REPLACE_REQUEST"
						}
					],
					"number": "434",
					"name": "CxlRejResponseTo",
					"type": "CHAR"
				},
				{
					"number": "435",
					"name": "UnderlyingCouponRate",
					"type": "PERCENTAGE"
				},
				{
					"number": "436",
					"name": "UnderlyingContractMultiplier",
					"type": "FLOAT"
				},
				{
					"number": "437",
					"name": "ContraTradeQty",
					"type": "QTY"
				},
				{
					"number": "438",
					"name": "ContraTradeTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "441",
					"name": "LiquidityNumSecurities",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "SINGLE_SECURITY"
						},
						{
							"enum": "2",
							"description": "INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY"
						},
						{
							"enum": "3",
							"description": "MULTI_LEG_SECURITY"
						}
					],
					"number": "442",
					"name": "MultiLegReportingType",
					"type": "CHAR"
				},
				{
					"number": "443",
					"name": "StrikeTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "444",
					"name": "ListStatusText",
					"type": "STRING"
				},
				{
					"number": "445",
					"name": "EncodedListStatusTextLen",
					"type": "LENGTH"
				},
				{
					"number": "446",
					"name": "EncodedListStatusText",
					"type": "DATA"
				},
				{
					"value": [
						{
							"enum": "B",
							"description": "BIC"
						},
						{
							"enum": "C",
							"description": "GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER"
						},
						{
							"enum": "D",
							"description": "PROPRIETARY_CUSTOM_CODE"
						},
						{
							"enum": "E",
							"description": "ISO_COUNTRY_CODE"
						},
						{
							"enum": "F",
							"description": "SETTLEMENT_ENTITY_LOCATION"
						},
						{
							"enum": "G",
							"description": "MIC"
						},
						{
							"enum": "H",
							"description": "CSD_PARTICIPANT_MEMBER_CODE"
						},
						{
							"enum": "1",
							"description": "KOREAN_INVESTOR_ID"
						},
						{
							"enum": "2",
							"description": "TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII"
						},
						{
							"enum": "3",
							"description": "TAIWANESE_TRADING_ACCOUNT"
						},
						{
							"enum": "4",
							"description": "MALAYSIAN_CENTRAL_DEPOSITORY"
						},
						{
							"enum": "5",
							"description": "CHINESE_B_SHARE"
						},
						{
							"enum": "6",
							"description": "UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER"
						},
						{
							"enum": "7",
							"description": "US_SOCIAL_SECURITY_NUMBER"
						},
						{
							"enum": "8",
							"description": "US_EMPLOYER_IDENTIFICATION_NUMBER"
						},
						{
							"enum": "9",
							"description": "AUSTRALIAN_BUSINESS_NUMBER"
						},
						{
							"enum": "A",
							"description": "AUSTRALIAN_TAX_FILE_NUMBER"
						},
						{
							"enum": "I",
							"description": "DIRECTED_BROKER_THREE_CHARACTER_ACRONYM_AS_DEFINED_IN_ISITC_ETC_BEST_PRACTICE_GUIDELINES_DOCUMENT"
						}
					],
					"number": "447",
					"name": "PartyIDSource",
					"type": "CHAR"
				},
				{
					"number": "448",
					"name": "PartyID",
					"type": "STRING"
				},
				{
					"number": "451",
					"name": "NetChgPrevDay",
					"type": "PRICEOFFSET"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "EXECUTING_FIRM"
						},
						{
							"enum": "2",
							"description": "BROKER_OF_CREDIT"
						},
						{
							"enum": "3",
							"description": "CLIENT_ID"
						},
						{
							"enum": "4",
							"description": "CLEARING_FIRM"
						},
						{
							"enum": "5",
							"description": "INVESTOR_ID"
						},
						{
							"enum": "6",
							"description": "INTRODUCING_FIRM"
						},
						{
							"enum": "7",
							"description": "ENTERING_FIRM"
						},
						{
							"enum": "8",
							"description": "LOCATE_LENDING_FIRM"
						},
						{
							"enum": "9",
							"description": "FUND_MANAGER_CLIENT_ID"
						},
						{
							"enum": "10",
							"description": "SETTLEMENT_LOCATION"
						},
						{
							"enum": "11",
							"description": "ORDER_ORIGINATION_TRADER"
						},
						{
							"enum": "12",
							"description": "EXECUTING_TRADER"
						},
						{
							"enum": "13",
							"description": "ORDER_ORIGINATION_FIRM"
						},
						{
							"enum": "14",
							"description": "GIVEUP_CLEARING_FIRM"
						},
						{
							"enum": "15",
							"description": "CORRESPONDANT_CLEARING_FIRM"
						},
						{
							"enum": "16",
							"description": "EXECUTING_SYSTEM"
						},
						{
							"enum": "17",
							"description": "CONTRA_FIRM"
						},
						{
							"enum": "18",
							"description": "CONTRA_CLEARING_FIRM"
						},
						{
							"enum": "19",
							"description": "SPONSORING_FIRM"
						},
						{
							"enum": "20",
							"description": "UNDERLYING_CONTRA_FIRM"
						},
						{
							"enum": "21",
							"description": "CLEARING_ORGANIZATION"
						},
						{
							"enum": "22",
							"description": "EXCHANGE"
						},
						{
							"enum": "24",
							"description": "CUSTOMER_ACCOUNT"
						},
						{
							"enum": "25",
							"description": "CORRESPONDENT_CLEARING_ORGANIZATION"
						},
						{
							"enum": "26",
							"description": "CORRESPONDENT_BROKER"
						},
						{
							"enum": "27",
							"description": "BUYER_SELLER"
						},
						{
							"enum": "28",
							"description": "CUSTODIAN"
						},
						{
							"enum": "29",
							"description": "INTERMEDIARY"
						},
						{
							"enum": "30",
							"description": "AGENT"
						},
						{
							"enum": "31",
							"description": "SUB_CUSTODIAN"
						},
						{
							"enum": "32",
							"description": "BENEFICIARY"
						},
						{
							"enum": "33",
							"description": "INTERESTED_PARTY"
						},
						{
							"enum": "34",
							"description": "REGULATORY_BODY"
						},
						{
							"enum": "35",
							"description": "LIQUIDITY_PROVIDER"
						},
						{
							"enum": "36",
							"description": "ENTERING_TRADER"
						},
						{
							"enum": "37",
							"description": "CONTRA_TRADER"
						},
						{
							"enum": "38",
							"description": "POSITION_ACCOUNT"
						}
					],
					"number": "452",
					"name": "PartyRole",
					"type": "INT"
				},
				{
					"number": "453",
					"name": "NoPartyIDs",
					"type": "NUMINGROUP"
				},
				{
					"number": "454",
					"name": "NoSecurityAltID",
					"type": "NUMINGROUP"
				},
				{
					"number": "455",
					"name": "SecurityAltID",
					"type": "STRING"
				},
				{
					"number": "456",
					"name": "SecurityAltIDSource",
					"type": "STRING"
				},
				{
					"number": "457",
					"name": "NoUnderlyingSecurityAltID",
					"type": "NUMINGROUP"
				},
				{
					"number": "458",
					"name": "UnderlyingSecurityAltID",
					"type": "STRING"
				},
				{
					"number": "459",
					"name": "UnderlyingSecurityAltIDSource",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "AGENCY"
						},
						{
							"enum": "2",
							"description": "COMMODITY"
						},
						{
							"enum": "3",
							"description": "CORPORATE"
						},
						{
							"enum": "4",
							"description": "CURRENCY"
						},
						{
							"enum": "5",
							"description": "EQUITY"
						},
						{
							"enum": "6",
							"description": "GOVERNMENT"
						},
						{
							"enum": "7",
							"description": "INDEX"
						},
						{
							"enum": "8",
							"description": "LOAN"
						},
						{
							"enum": "9",
							"description": "MONEYMARKET"
						},
						{
							"enum": "10",
							"description": "MORTGAGE"
						},
						{
							"enum": "11",
							"description": "MUNICIPAL"
						},
						{
							"enum": "12",
							"description": "OTHER"
						},
						{
							"enum": "13",
							"description": "FINANCING"
						}
					],
					"number": "460",
					"name": "Product",
					"type": "INT"
				},
				{
					"number": "461",
					"name": "CFICode",
					"type": "STRING"
				},
				{
					"number": "462",
					"name": "UnderlyingProduct",
					"type": "INT"
				},
				{
					"number": "463",
					"name": "UnderlyingCFICode",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "464",
					"name": "TestMessageIndicator",
					"type": "BOOLEAN"
				},
				{
					"number": "466",
					"name": "BookingRefID",
					"type": "STRING"
				},
				{
					"number": "467",
					"name": "IndividualAllocID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "ROUND_TO_NEAREST"
						},
						{
							"enum": "1",
							"description": "ROUND_DOWN"
						},
						{
							"enum": "2",
							"description": "ROUND_UP"
						}
					],
					"number": "468",
					"name": "RoundingDirection",
					"type": "CHAR"
				},
				{
					"number": "469",
					"name": "RoundingModulus",
					"type": "FLOAT"
				},
				{
					"number": "470",
					"name": "CountryOfIssue",
					"type": "COUNTRY"
				},
				{
					"number": "471",
					"name": "StateOrProvinceOfIssue",
					"type": "STRING"
				},
				{
					"number": "472",
					"name": "LocaleOfIssue",
					"type": "STRING"
				},
				{
					"number": "473",
					"name": "NoRegistDtls",
					"type": "NUMINGROUP"
				},
				{
					"number": "474",
					"name": "MailingDtls",
					"type": "STRING"
				},
				{
					"number": "475",
					"name": "InvestorCountryOfResidence",
					"type": "COUNTRY"
				},
				{
					"number": "476",
					"name": "PaymentRef",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "CREST"
						},
						{
							"enum": "2",
							"description": "NSCC"
						},
						{
							"enum": "3",
							"description": "EUROCLEAR"
						},
						{
							"enum": "4",
							"description": "CLEARSTREAM"
						},
						{
							"enum": "5",
							"description": "CHEQUE"
						},
						{
							"enum": "6",
							"description": "TELEGRAPHIC_TRANSFER"
						},
						{
							"enum": "7",
							"description": "FEDWIRE"
						},
						{
							"enum": "8",
							"description": "DIRECT_CREDIT"
						},
						{
							"enum": "9",
							"description": "ACH_CREDIT"
						},
						{
							"enum": "10",
							"description": "BPAY"
						},
						{
							"enum": "11",
							"description": "HIGH_VALUE_CLEARING_SYSTEM"
						},
						{
							"enum": "12",
							"description": "REINVEST_IN_FUND"
						}
					],
					"number": "477",
					"name": "DistribPaymentMethod",
					"type": "INT"
				},
				{
					"number": "478",
					"name": "CashDistribCurr",
					"type": "CURRENCY"
				},
				{
					"number": "479",
					"name": "CommCurrency",
					"type": "CURRENCY"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO_EXECUTION_ONLY"
						},
						{
							"enum": "M",
							"description": "NO_WAIVER_AGREEMENT"
						},
						{
							"enum": "O",
							"description": "NO_INSTITUTIONAL"
						}
					],
					"number": "480",
					"name": "CancellationRights",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "PASSED"
						},
						{
							"enum": "N",
							"description": "NOT_CHECKED"
						},
						{
							"enum": "1",
							"description": "EXEMPT_BELOW_THE_LIMIT"
						},
						{
							"enum": "2",
							"description": "EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION"
						},
						{
							"enum": "3",
							"description": "EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION"
						}
					],
					"number": "481",
					"name": "MoneyLaunderingStatus",
					"type": "CHAR"
				},
				{
					"number": "482",
					"name": "MailingInst",
					"type": "STRING"
				},
				{
					"number": "483",
					"name": "TransBkdTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"value": [
						{
							"enum": "B",
							"description": "BID_PRICE"
						},
						{
							"enum": "C",
							"description": "CREATION_PRICE"
						},
						{
							"enum": "D",
							"description": "CREATION_PRICE_PLUS_ADJUSTMENT"
						},
						{
							"enum": "E",
							"description": "CREATION_PRICE_PLUS_ADJUSTMENT_AMOUNT"
						},
						{
							"enum": "O",
							"description": "OFFER_PRICE"
						},
						{
							"enum": "P",
							"description": "OFFER_PRICE_MINUS_ADJUSTMENT"
						},
						{
							"enum": "Q",
							"description": "OFFER_PRICE_MINUS_ADJUSTMENT_AMOUNT"
						},
						{
							"enum": "S",
							"description": "SINGLE_PRICE"
						}
					],
					"number": "484",
					"name": "ExecPriceType",
					"type": "CHAR"
				},
				{
					"number": "485",
					"name": "ExecPriceAdjustment",
					"type": "FLOAT"
				},
				{
					"number": "486",
					"name": "DateOfBirth",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "487",
					"name": "TradeReportTransType",
					"type": "INT"
				},
				{
					"number": "488",
					"name": "CardHolderName",
					"type": "STRING"
				},
				{
					"number": "489",
					"name": "CardNumber",
					"type": "STRING"
				},
				{
					"number": "490",
					"name": "CardExpDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "491",
					"name": "CardIssNum",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "CREST"
						},
						{
							"enum": "2",
							"description": "NSCC"
						},
						{
							"enum": "3",
							"description": "EUROCLEAR"
						},
						{
							"enum": "4",
							"description": "CLEARSTREAM"
						},
						{
							"enum": "5",
							"description": "CHEQUE"
						},
						{
							"enum": "6",
							"description": "TELEGRAPHIC_TRANSFER"
						},
						{
							"enum": "7",
							"description": "FEDWIRE"
						},
						{
							"enum": "8",
							"description": "DEBIT_CARD"
						},
						{
							"enum": "9",
							"description": "DIRECT_DEBIT"
						},
						{
							"enum": "10",
							"description": "DIRECT_CREDIT"
						},
						{
							"enum": "11",
							"description": "CREDIT_CARD"
						},
						{
							"enum": "12",
							"description": "ACH_DEBIT"
						},
						{
							"enum": "13",
							"description": "ACH_CREDIT"
						},
						{
							"enum": "14",
							"description": "BPAY"
						},
						{
							"enum": "15",
							"description": "HIGH_VALUE_CLEARING_SYSTEM"
						}
					],
					"number": "492",
					"name": "PaymentMethod",
					"type": "INT"
				},
				{
					"number": "493",
					"name": "RegistAcctType",
					"type": "STRING"
				},
				{
					"number": "494",
					"name": "Designation",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NONE_NOT_APPLICABLE"
						},
						{
							"enum": "1",
							"description": "MAXI_ISA"
						},
						{
							"enum": "2",
							"description": "TESSA"
						},
						{
							"enum": "3",
							"description": "MINI_CASH_ISA"
						},
						{
							"enum": "4",
							"description": "MINI_STOCKS_AND_SHARES_ISA"
						},
						{
							"enum": "5",
							"description": "MINI_INSURANCE_ISA"
						},
						{
							"enum": "6",
							"description": "CURRENT_YEAR_PAYMENT"
						},
						{
							"enum": "7",
							"description": "PRIOR_YEAR_PAYMENT"
						},
						{
							"enum": "8",
							"description": "ASSET_TRANSFER"
						},
						{
							"enum": "9",
							"description": "EMPLOYEE"
						},
						{
							"enum": "10",
							"description": "EMPLOYEE_CURRENT_YEAR"
						},
						{
							"enum": "11",
							"description": "EMPLOYER"
						},
						{
							"enum": "12",
							"description": "EMPLOYER_CURRENT_YEAR"
						},
						{
							"enum": "13",
							"description": "NON_FUND_PROTOTYPE_IRA"
						},
						{
							"enum": "14",
							"description": "NON_FUND_QUALIFIED_PLAN"
						},
						{
							"enum": "15",
							"description": "DEFINED_CONTRIBUTION_PLAN"
						},
						{
							"enum": "16",
							"description": "INDIVIDUAL_RETIREMENT_ACCOUNT"
						},
						{
							"enum": "17",
							"description": "INDIVIDUAL_RETIREMENT_ACCOUNT_ROLLOVER"
						},
						{
							"enum": "18",
							"description": "KEOGH"
						},
						{
							"enum": "19",
							"description": "PROFIT_SHARING_PLAN"
						},
						{
							"enum": "20",
							"description": "401K"
						},
						{
							"enum": "21",
							"description": "SELF_DIRECTED_IRA"
						},
						{
							"enum": "22",
							"description": "403"
						},
						{
							"enum": "23",
							"description": "457"
						},
						{
							"enum": "24",
							"description": "ROTH_IRA_24"
						},
						{
							"enum": "25",
							"description": "ROTH_IRA_25"
						},
						{
							"enum": "26",
							"description": "ROTH_CONVERSION_IRA_26"
						},
						{
							"enum": "27",
							"description": "ROTH_CONVERSION_IRA_27"
						},
						{
							"enum": "28",
							"description": "EDUCATION_IRA_28"
						},
						{
							"enum": "29",
							"description": "EDUCATION_IRA_29"
						}
					],
					"number": "495",
					"name": "TaxAdvantageType",
					"type": "INT"
				},
				{
					"number": "496",
					"name": "RegistRejReasonText",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "497",
					"name": "FundRenewWaiv",
					"type": "CHAR"
				},
				{
					"number": "498",
					"name": "CashDistribAgentName",
					"type": "STRING"
				},
				{
					"number": "499",
					"name": "CashDistribAgentCode",
					"type": "STRING"
				},
				{
					"number": "500",
					"name": "CashDistribAgentAcctNumber",
					"type": "STRING"
				},
				{
					"number": "501",
					"name": "CashDistribPayRef",
					"type": "STRING"
				},
				{
					"number": "502",
					"name": "CashDistribAgentAcctName",
					"type": "STRING"
				},
				{
					"number": "503",
					"name": "CardStartDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "504",
					"name": "PaymentDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "505",
					"name": "PaymentRemitterID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "A",
							"description": "ACCEPTED"
						},
						{
							"enum": "R",
							"description": "REJECTED"
						},
						{
							"enum": "H",
							"description": "HELD"
						},
						{
							"enum": "N",
							"description": "REMINDER_IE_REGISTRATION_INSTRUCTIONS_ARE_STILL_OUTSTANDING"
						}
					],
					"number": "506",
					"name": "RegistStatus",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "INVALID_UNACCEPTABLE_ACCOUNT_TYPE"
						},
						{
							"enum": "2",
							"description": "INVALID_UNACCEPTABLE_TAX_EXEMPT_TYPE"
						},
						{
							"enum": "3",
							"description": "INVALID_UNACCEPTABLE_OWNERSHIP_TYPE"
						},
						{
							"enum": "4",
							"description": "INVALID_UNACCEPTABLE_NO_REG_DETLS"
						},
						{
							"enum": "5",
							"description": "INVALID_UNACCEPTABLE_REG_SEQ_NO"
						},
						{
							"enum": "6",
							"description": "INVALID_UNACCEPTABLE_REG_DTLS"
						},
						{
							"enum": "7",
							"description": "INVALID_UNACCEPTABLE_MAILING_DTLS"
						},
						{
							"enum": "8",
							"description": "INVALID_UNACCEPTABLE_MAILING_INST"
						},
						{
							"enum": "9",
							"description": "INVALID_UNACCEPTABLE_INVESTOR_ID"
						},
						{
							"enum": "10",
							"description": "INVALID_UNACCEPTABLE_INVESTOR_ID_SOURCE"
						},
						{
							"enum": "11",
							"description": "INVALID_UNACCEPTABLE_DATE_OF_BIRTH"
						},
						{
							"enum": "12",
							"description": "INVALID_UNACCEPTABLE_INVESTOR_COUNTRY_OF_RESIDENCE"
						},
						{
							"enum": "13",
							"description": "INVALID_UNACCEPTABLE_NODISTRIBINSTNS"
						},
						{
							"enum": "14",
							"description": "INVALID_UNACCEPTABLE_DISTRIB_PERCENTAGE"
						},
						{
							"enum": "15",
							"description": "INVALID_UNACCEPTABLE_DISTRIB_PAYMENT_METHOD"
						},
						{
							"enum": "16",
							"description": "INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NAME"
						},
						{
							"enum": "17",
							"description": "INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_CODE"
						},
						{
							"enum": "18",
							"description": "INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NUM"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "507",
					"name": "RegistRejReasonCode",
					"type": "INT"
				},
				{
					"number": "508",
					"name": "RegistRefID",
					"type": "STRING"
				},
				{
					"number": "509",
					"name": "RegistDtls",
					"type": "STRING"
				},
				{
					"number": "510",
					"name": "NoDistribInsts",
					"type": "NUMINGROUP"
				},
				{
					"number": "511",
					"name": "RegistEmail",
					"type": "STRING"
				},
				{
					"number": "512",
					"name": "DistribPercentage",
					"type": "PERCENTAGE"
				},
				{
					"number": "513",
					"name": "RegistID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NEW"
						},
						{
							"enum": "1",
							"description": "REPLACE"
						},
						{
							"enum": "2",
							"description": "CANCEL"
						}
					],
					"number": "514",
					"name": "RegistTransType",
					"type": "CHAR"
				},
				{
					"number": "515",
					"name": "ExecValuationPoint",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "516",
					"name": "OrderPercent",
					"type": "PERCENTAGE"
				},
				{
					"value": [
						{
							"enum": "J",
							"description": "JOINT_INVESTORS"
						},
						{
							"enum": "T",
							"description": "TENANTS_IN_COMMON"
						},
						{
							"enum": "2",
							"description": "JOINT_TRUSTEES"
						}
					],
					"number": "517",
					"name": "OwnershipType",
					"type": "CHAR"
				},
				{
					"number": "518",
					"name": "NoContAmts",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "COMMISSION_AMOUNT"
						},
						{
							"enum": "2",
							"description": "COMMISSION"
						},
						{
							"enum": "3",
							"description": "INITIAL_CHARGE_AMOUNT"
						},
						{
							"enum": "4",
							"description": "INITIAL_CHARGE"
						},
						{
							"enum": "5",
							"description": "DISCOUNT_AMOUNT"
						},
						{
							"enum": "6",
							"description": "DISCOUNT"
						},
						{
							"enum": "7",
							"description": "DILUTION_LEVY_AMOUNT"
						},
						{
							"enum": "8",
							"description": "DILUTION_LEVY"
						},
						{
							"enum": "9",
							"description": "EXIT_CHARGE_AMOUNT"
						},
						{
							"enum": "10",
							"description": "EXIT_CHARGE"
						},
						{
							"enum": "11",
							"description": "FUND_BASED_RENEWAL_COMMISSION"
						},
						{
							"enum": "12",
							"description": "PROJECTED_FUND_VALUE"
						},
						{
							"enum": "13",
							"description": "FUND_BASED_RENEWAL_COMMISSION_AMOUNT_13"
						},
						{
							"enum": "14",
							"description": "FUND_BASED_RENEWAL_COMMISSION_AMOUNT_14"
						},
						{
							"enum": "15",
							"description": "NET_SETTLEMENT_AMOUNT"
						}
					],
					"number": "519",
					"name": "ContAmtType",
					"type": "INT"
				},
				{
					"number": "520",
					"name": "ContAmtValue",
					"type": "FLOAT"
				},
				{
					"number": "521",
					"name": "ContAmtCurr",
					"type": "CURRENCY"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "INDIVIDUAL_INVESTOR"
						},
						{
							"enum": "2",
							"description": "PUBLIC_COMPANY"
						},
						{
							"enum": "3",
							"description": "PRIVATE_COMPANY"
						},
						{
							"enum": "4",
							"description": "INDIVIDUAL_TRUSTEE"
						},
						{
							"enum": "5",
							"description": "COMPANY_TRUSTEE"
						},
						{
							"enum": "6",
							"description": "PENSION_PLAN"
						},
						{
							"enum": "7",
							"description": "CUSTODIAN_UNDER_GIFTS_TO_MINORS_ACT"
						},
						{
							"enum": "8",
							"description": "TRUSTS"
						},
						{
							"enum": "9",
							"description": "FIDUCIARIES"
						},
						{
							"enum": "10",
							"description": "NETWORKING_SUB_ACCOUNT"
						},
						{
							"enum": "11",
							"description": "NON_PROFIT_ORGANIZATION"
						},
						{
							"enum": "12",
							"description": "CORPORATE_BODY"
						},
						{
							"enum": "13",
							"description": "NOMINEE"
						}
					],
					"number": "522",
					"name": "OwnerType",
					"type": "INT"
				},
				{
					"number": "523",
					"name": "PartySubID",
					"type": "STRING"
				},
				{
					"number": "524",
					"name": "NestedPartyID",
					"type": "STRING"
				},
				{
					"number": "525",
					"name": "NestedPartyIDSource",
					"type": "CHAR"
				},
				{
					"number": "526",
					"name": "SecondaryClOrdID",
					"type": "STRING"
				},
				{
					"number": "527",
					"name": "SecondaryExecID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "A",
							"description": "AGENCY"
						},
						{
							"enum": "G",
							"description": "PROPRIETARY"
						},
						{
							"enum": "I",
							"description": "INDIVIDUAL"
						},
						{
							"enum": "P",
							"description": "PRINCIPAL"
						},
						{
							"enum": "R",
							"description": "RISKLESS_PRINCIPAL"
						},
						{
							"enum": "W",
							"description": "AGENT_FOR_OTHER_MEMBER"
						}
					],
					"number": "528",
					"name": "OrderCapacity",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "PROGRAM_TRADE"
						},
						{
							"enum": "2",
							"description": "INDEX_ARBITRAGE"
						},
						{
							"enum": "3",
							"description": "NON_INDEX_ARBITRAGE"
						},
						{
							"enum": "4",
							"description": "COMPETING_MARKET_MAKER"
						},
						{
							"enum": "5",
							"description": "ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY"
						},
						{
							"enum": "6",
							"description": "ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY"
						},
						{
							"enum": "7",
							"description": "FOREIGN_ENTITY"
						},
						{
							"enum": "8",
							"description": "EXTERNAL_MARKET_PARTICIPANT"
						},
						{
							"enum": "9",
							"description": "EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE"
						},
						{
							"enum": "A",
							"description": "RISKLESS_ARBITRAGE"
						}
					],
					"number": "529",
					"name": "OrderRestrictions",
					"type": "MULTIPLEVALUESTRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "CANCEL_ORDERS_FOR_A_SECURITY"
						},
						{
							"enum": "2",
							"description": "CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY"
						},
						{
							"enum": "3",
							"description": "CANCEL_ORDERS_FOR_A_PRODUCT"
						},
						{
							"enum": "4",
							"description": "CANCEL_ORDERS_FOR_A_CFICODE"
						},
						{
							"enum": "5",
							"description": "CANCEL_ORDERS_FOR_A_SECURITYTYPE"
						},
						{
							"enum": "6",
							"description": "CANCEL_ORDERS_FOR_A_TRADING_SESSION"
						},
						{
							"enum": "7",
							"description": "CANCEL_ALL_ORDERS"
						}
					],
					"number": "530",
					"name": "MassCancelRequestType",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "CANCEL_REQUEST_REJECTED"
						},
						{
							"enum": "1",
							"description": "CANCEL_ORDERS_FOR_A_SECURITY"
						},
						{
							"enum": "2",
							"description": "CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY"
						},
						{
							"enum": "3",
							"description": "CANCEL_ORDERS_FOR_A_PRODUCT"
						},
						{
							"enum": "4",
							"description": "CANCEL_ORDERS_FOR_A_CFICODE"
						},
						{
							"enum": "5",
							"description": "CANCEL_ORDERS_FOR_A_SECURITYTYPE"
						},
						{
							"enum": "6",
							"description": "CANCEL_ORDERS_FOR_A_TRADING_SESSION"
						},
						{
							"enum": "7",
							"description": "CANCEL_ALL_ORDERS"
						}
					],
					"number": "531",
					"name": "MassCancelResponse",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "MASS_CANCEL_NOT_SUPPORTED"
						},
						{
							"enum": "1",
							"description": "INVALID_OR_UNKNOWN_SECURITY"
						},
						{
							"enum": "2",
							"description": "INVALID_OR_UNKNOWN_UNDERLYING"
						},
						{
							"enum": "3",
							"description": "INVALID_OR_UNKNOWN_PRODUCT"
						},
						{
							"enum": "4",
							"description": "INVALID_OR_UNKNOWN_CFICODE"
						},
						{
							"enum": "5",
							"description": "INVALID_OR_UNKNOWN_SECURITY_TYPE"
						},
						{
							"enum": "6",
							"description": "INVALID_OR_UNKNOWN_TRADING_SESSION"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "532",
					"name": "MassCancelRejectReason",
					"type": "CHAR"
				},
				{
					"number": "533",
					"name": "TotalAffectedOrders",
					"type": "INT"
				},
				{
					"number": "534",
					"name": "NoAffectedOrders",
					"type": "NUMINGROUP"
				},
				{
					"number": "535",
					"name": "AffectedOrderID",
					"type": "STRING"
				},
				{
					"number": "536",
					"name": "AffectedSecondaryOrderID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "INDICATIVE"
						},
						{
							"enum": "1",
							"description": "TRADEABLE"
						},
						{
							"enum": "2",
							"description": "RESTRICTED_TRADEABLE"
						},
						{
							"enum": "3",
							"description": "COUNTER"
						}
					],
					"number": "537",
					"name": "QuoteType",
					"type": "INT"
				},
				{
					"number": "538",
					"name": "NestedPartyRole",
					"type": "INT"
				},
				{
					"number": "539",
					"name": "NoNestedPartyIDs",
					"type": "NUMINGROUP"
				},
				{
					"number": "540",
					"name": "TotalAccruedInterestAmt",
					"type": "AMT"
				},
				{
					"number": "541",
					"name": "MaturityDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "542",
					"name": "UnderlyingMaturityDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "543",
					"name": "InstrRegistry",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "CASH"
						},
						{
							"enum": "2",
							"description": "MARGIN_OPEN"
						},
						{
							"enum": "3",
							"description": "MARGIN_CLOSE"
						}
					],
					"number": "544",
					"name": "CashMargin",
					"type": "CHAR"
				},
				{
					"number": "545",
					"name": "NestedPartySubID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "LOCAL"
						},
						{
							"enum": "2",
							"description": "NATIONAL"
						},
						{
							"enum": "3",
							"description": "GLOBAL"
						}
					],
					"number": "546",
					"name": "Scope",
					"type": "MULTIPLEVALUESTRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "547",
					"name": "MDImplicitDelete",
					"type": "BOOLEAN"
				},
				{
					"number": "548",
					"name": "CrossID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT_BOTH_SIDES_ARE_TREATED_IN_THE_SAME_MANNER_THIS_IS_EQUIVALENT_TO_AN_ALL_OR_NONE"
						},
						{
							"enum": "2",
							"description": "CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED_ONE_SIDE_IS_FULLY_EXECUTED_THE_OTHER_SIDE_IS_PARTIALLY_EXECUTED_WITH_THE_REMAINDER_BEING_CANCELLED_THIS_IS_EQUIVALENT_TO_AN_IMMEDIATE_OR_CANCEL_ON_THE_OTHER_SIDE_NOTE_THE_CROSSPRIORITZATION"
						},
						{
							"enum": "3",
							"description": "CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE_ONE_SIDE_OF_THE_CROSS_IS_FULLY_EXECUTED"
						},
						{
							"enum": "4",
							"description": "CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE_IN_THE_CASE_OTHER_ORDERS_EXIST_WITH_THE_SAME_PRICE_THE_QUANTITY_OF_THE_CROSS_IS_EXECUTED_AGAINST_THE_EXISTING_ORDERS_AND_QUOTES_THE_REMAINDER_OF_THE_CROSS_IS_EXECUTED_AGAINST_THE_OTHER_SIDE_OF_THE_CROSS_THE_TWO_SIDES_POTENTIALLY_HAVE_DIFFERENT_QUANTITIES"
						}
					],
					"number": "549",
					"name": "CrossType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NONE"
						},
						{
							"enum": "1",
							"description": "BUY_SIDE_IS_PRIORITIZED"
						},
						{
							"enum": "2",
							"description": "SELL_SIDE_IS_PRIORITIZED"
						}
					],
					"number": "550",
					"name": "CrossPrioritization",
					"type": "INT"
				},
				{
					"number": "551",
					"name": "OrigCrossID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "ONE_SIDE"
						},
						{
							"enum": "2",
							"description": "BOTH_SIDES"
						}
					],
					"number": "552",
					"name": "NoSides",
					"type": "NUMINGROUP"
				},
				{
					"number": "553",
					"name": "Username",
					"type": "STRING"
				},
				{
					"number": "554",
					"name": "Password",
					"type": "STRING"
				},
				{
					"number": "555",
					"name": "NoLegs",
					"type": "NUMINGROUP"
				},
				{
					"number": "556",
					"name": "LegCurrency",
					"type": "CURRENCY"
				},
				{
					"number": "557",
					"name": "TotNoSecurityTypes",
					"type": "INT"
				},
				{
					"number": "558",
					"name": "NoSecurityTypes",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "SYMBOL"
						},
						{
							"enum": "1",
							"description": "SECURITYTYPE_AND_OR_CFICODE"
						},
						{
							"enum": "2",
							"description": "PRODUCT"
						},
						{
							"enum": "3",
							"description": "TRADINGSESSIONID"
						},
						{
							"enum": "4",
							"description": "ALL_SECURITIES"
						}
					],
					"number": "559",
					"name": "SecurityListRequestType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "VALID_REQUEST"
						},
						{
							"enum": "1",
							"description": "INVALID_OR_UNSUPPORTED_REQUEST"
						},
						{
							"enum": "2",
							"description": "NO_INSTRUMENTS_FOUND_THAT_MATCH_SELECTION_CRITERIA"
						},
						{
							"enum": "3",
							"description": "NOT_AUTHORIZED_TO_RETRIEVE_INSTRUMENT_DATA"
						},
						{
							"enum": "4",
							"description": "INSTRUMENT_DATA_TEMPORARILY_UNAVAILABLE"
						},
						{
							"enum": "5",
							"description": "REQUEST_FOR_INSTRUMENT_DATA_NOT_SUPPORTED"
						}
					],
					"number": "560",
					"name": "SecurityRequestResult",
					"type": "INT"
				},
				{
					"number": "561",
					"name": "RoundLot",
					"type": "QTY"
				},
				{
					"number": "562",
					"name": "MinTradeVol",
					"type": "QTY"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "REPORT_BY_MULITLEG_SECURITY_ONLY"
						},
						{
							"enum": "1",
							"description": "REPORT_BY_MULTILEG_SECURITY_AND_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY"
						},
						{
							"enum": "2",
							"description": "REPORT_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY_ONLY"
						}
					],
					"number": "563",
					"name": "MultiLegRptTypeReq",
					"type": "INT"
				},
				{
					"number": "564",
					"name": "LegPositionEffect",
					"type": "CHAR"
				},
				{
					"number": "565",
					"name": "LegCoveredOrUncovered",
					"type": "INT"
				},
				{
					"number": "566",
					"name": "LegPrice",
					"type": "PRICE"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "UNKNOWN_OR_INVALID_TRADINGSESSIONID"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "567",
					"name": "TradSesStatusRejReason",
					"type": "INT"
				},
				{
					"number": "568",
					"name": "TradeRequestID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "ALL_TRADES"
						},
						{
							"enum": "1",
							"description": "MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST"
						},
						{
							"enum": "2",
							"description": "UNMATCHED_TRADES_THAT_MATCH_CRITERIA"
						},
						{
							"enum": "3",
							"description": "UNREPORTED_TRADES_THAT_MATCH_CRITERIA"
						},
						{
							"enum": "4",
							"description": "ADVISORIES_THAT_MATCH_CRITERIA"
						}
					],
					"number": "569",
					"name": "TradeRequestType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "570",
					"name": "PreviouslyReported",
					"type": "BOOLEAN"
				},
				{
					"number": "571",
					"name": "TradeReportID",
					"type": "STRING"
				},
				{
					"number": "572",
					"name": "TradeReportRefID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "COMPARED_MATCHED_OR_AFFIRMED"
						},
						{
							"enum": "1",
							"description": "UNCOMPARED_UNMATCHED_OR_UNAFFIRMED"
						},
						{
							"enum": "2",
							"description": "ADVISORY_OR_ALERT"
						}
					],
					"number": "573",
					"name": "MatchStatus",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "A1",
							"description": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_FOUR_BADGES_AND_EXECUTION_TIME"
						},
						{
							"enum": "A2",
							"description": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_FOUR_BADGES"
						},
						{
							"enum": "A3",
							"description": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_TWO_BADGES_AND_EXECUTION_TIME"
						},
						{
							"enum": "A4",
							"description": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_TWO_BADGES"
						},
						{
							"enum": "A5",
							"description": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_EXECUTION_TIME"
						},
						{
							"enum": "AQ",
							"description": "COMPARED_RECORDS_RESULTING_FROM_STAMPED_ADVISORIES_OR_SPECIALIST_ACCEPTS_PAIR_OFFS"
						},
						{
							"enum": "S1",
							"description": "SUMMARIZED_MATCH_USING_A1_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED"
						},
						{
							"enum": "S2",
							"description": "SUMMARIZED_MATCH_USING_A2_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED"
						},
						{
							"enum": "S3",
							"description": "SUMMARIZED_MATCH_USING_A3_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED"
						},
						{
							"enum": "S4",
							"description": "SUMMARIZED_MATCH_USING_A4_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED"
						},
						{
							"enum": "S5",
							"description": "SUMMARIZED_MATCH_USING_A5_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED"
						},
						{
							"enum": "M1",
							"description": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_MINUS_BADGES_AND_TIMES_ACT_M1_MATCH"
						},
						{
							"enum": "M2",
							"description": "SUMMARIZED_MATCH_MINUS_BADGES_AND_TIMES_ACT_M2_MATCH"
						},
						{
							"enum": "MT",
							"description": "OCS_LOCKED_IN_NON_ACT"
						},
						{
							"enum": "M3",
							"description": "ACT_ACCEPTED_TRADE"
						},
						{
							"enum": "M4",
							"description": "ACT_DEFAULT_TRADE"
						},
						{
							"enum": "M5",
							"description": "ACT_DEFAULT_AFTER_M2"
						},
						{
							"enum": "M6",
							"description": "ACT_M6_MATCH"
						}
					],
					"number": "574",
					"name": "MatchType",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "575",
					"name": "OddLot",
					"type": "BOOLEAN"
				},
				{
					"number": "576",
					"name": "NoClearingInstructions",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "PROCESS_NORMALLY"
						},
						{
							"enum": "1",
							"description": "EXCLUDE_FROM_ALL_NETTING"
						},
						{
							"enum": "2",
							"description": "BILATERAL_NETTING_ONLY"
						},
						{
							"enum": "3",
							"description": "EX_CLEARING"
						},
						{
							"enum": "4",
							"description": "SPECIAL_TRADE"
						},
						{
							"enum": "5",
							"description": "MULTILATERAL_NETTING"
						},
						{
							"enum": "6",
							"description": "CLEAR_AGAINST_CENTRAL_COUNTERPARTY"
						},
						{
							"enum": "7",
							"description": "EXCLUDE_FROM_CENTRAL_COUNTERPARTY"
						},
						{
							"enum": "8",
							"description": "MANUAL_MODE"
						},
						{
							"enum": "9",
							"description": "AUTOMATIC_POSTING_MODE"
						},
						{
							"enum": "10",
							"description": "AUTOMATIC_GIVE_UP_MODE"
						},
						{
							"enum": "11",
							"description": "QUALIFIED_SERVICE_REPRESENTATIVE"
						},
						{
							"enum": "12",
							"description": "CUSTOMER_TRADE"
						},
						{
							"enum": "13",
							"description": "SELF_CLEARING"
						}
					],
					"number": "577",
					"name": "ClearingInstruction",
					"type": "INT"
				},
				{
					"number": "578",
					"name": "TradeInputSource",
					"type": "STRING"
				},
				{
					"number": "579",
					"name": "TradeInputDevice",
					"type": "STRING"
				},
				{
					"number": "580",
					"name": "NoDates",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS"
						},
						{
							"enum": "2",
							"description": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS"
						},
						{
							"enum": "3",
							"description": "HOUSE_TRADER"
						},
						{
							"enum": "4",
							"description": "FLOOR_TRADER"
						},
						{
							"enum": "6",
							"description": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED"
						},
						{
							"enum": "7",
							"description": "ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED"
						},
						{
							"enum": "8",
							"description": "JOINT_BACKOFFICE_ACCOUNT"
						}
					],
					"number": "581",
					"name": "AccountType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT"
						},
						{
							"enum": "2",
							"description": "CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT"
						},
						{
							"enum": "3",
							"description": "MEMBER_TRADING_FOR_ANOTHER_MEMBER"
						},
						{
							"enum": "4",
							"description": "ALL_OTHER"
						}
					],
					"number": "582",
					"name": "CustOrderCapacity",
					"type": "INT"
				},
				{
					"number": "583",
					"name": "ClOrdLinkID",
					"type": "STRING"
				},
				{
					"number": "584",
					"name": "MassStatusReqID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "STATUS_FOR_ORDERS_FOR_A_SECURITY"
						},
						{
							"enum": "2",
							"description": "STATUS_FOR_ORDERS_FOR_AN_UNDERLYING_SECURITY"
						},
						{
							"enum": "3",
							"description": "STATUS_FOR_ORDERS_FOR_A_PRODUCT"
						},
						{
							"enum": "4",
							"description": "STATUS_FOR_ORDERS_FOR_A_CFICODE"
						},
						{
							"enum": "5",
							"description": "STATUS_FOR_ORDERS_FOR_A_SECURITYTYPE"
						},
						{
							"enum": "6",
							"description": "STATUS_FOR_ORDERS_FOR_A_TRADING_SESSION"
						},
						{
							"enum": "7",
							"description": "STATUS_FOR_ALL_ORDERS"
						},
						{
							"enum": "8",
							"description": "STATUS_FOR_ORDERS_FOR_A_PARTYID"
						}
					],
					"number": "585",
					"name": "MassStatusReqType",
					"type": "INT"
				},
				{
					"number": "586",
					"name": "OrigOrdModTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "587",
					"name": "LegSettlType",
					"type": "CHAR"
				},
				{
					"number": "588",
					"name": "LegSettlDate",
					"type": "LOCALMKTDATE"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR"
						},
						{
							"enum": "1",
							"description": "SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING"
						},
						{
							"enum": "2",
							"description": "ACCUMULATE"
						}
					],
					"number": "589",
					"name": "DayBookingInst",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT"
						},
						{
							"enum": "1",
							"description": "AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER"
						},
						{
							"enum": "2",
							"description": "AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE"
						}
					],
					"number": "590",
					"name": "BookingUnit",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "PRO_RATA"
						},
						{
							"enum": "1",
							"description": "DO_NOT_PRO_RATA_DISCUSS_FIRST"
						}
					],
					"number": "591",
					"name": "PreallocMethod",
					"type": "CHAR"
				},
				{
					"number": "592",
					"name": "UnderlyingCountryOfIssue",
					"type": "COUNTRY"
				},
				{
					"number": "593",
					"name": "UnderlyingStateOrProvinceOfIssue",
					"type": "STRING"
				},
				{
					"number": "594",
					"name": "UnderlyingLocaleOfIssue",
					"type": "STRING"
				},
				{
					"number": "595",
					"name": "UnderlyingInstrRegistry",
					"type": "STRING"
				},
				{
					"number": "596",
					"name": "LegCountryOfIssue",
					"type": "COUNTRY"
				},
				{
					"number": "597",
					"name": "LegStateOrProvinceOfIssue",
					"type": "STRING"
				},
				{
					"number": "598",
					"name": "LegLocaleOfIssue",
					"type": "STRING"
				},
				{
					"number": "599",
					"name": "LegInstrRegistry",
					"type": "STRING"
				},
				{
					"number": "600",
					"name": "LegSymbol",
					"type": "STRING"
				},
				{
					"number": "601",
					"name": "LegSymbolSfx",
					"type": "STRING"
				},
				{
					"number": "602",
					"name": "LegSecurityID",
					"type": "STRING"
				},
				{
					"number": "603",
					"name": "LegSecurityIDSource",
					"type": "STRING"
				},
				{
					"number": "604",
					"name": "NoLegSecurityAltID",
					"type": "NUMINGROUP"
				},
				{
					"number": "605",
					"name": "LegSecurityAltID",
					"type": "STRING"
				},
				{
					"number": "606",
					"name": "LegSecurityAltIDSource",
					"type": "STRING"
				},
				{
					"number": "607",
					"name": "LegProduct",
					"type": "INT"
				},
				{
					"number": "608",
					"name": "LegCFICode",
					"type": "STRING"
				},
				{
					"number": "609",
					"name": "LegSecurityType",
					"type": "STRING"
				},
				{
					"number": "610",
					"name": "LegMaturityMonthYear",
					"type": "MONTHYEAR"
				},
				{
					"number": "611",
					"name": "LegMaturityDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "612",
					"name": "LegStrikePrice",
					"type": "PRICE"
				},
				{
					"number": "613",
					"name": "LegOptAttribute",
					"type": "CHAR"
				},
				{
					"number": "614",
					"name": "LegContractMultiplier",
					"type": "FLOAT"
				},
				{
					"number": "615",
					"name": "LegCouponRate",
					"type": "PERCENTAGE"
				},
				{
					"number": "616",
					"name": "LegSecurityExchange",
					"type": "EXCHANGE"
				},
				{
					"number": "617",
					"name": "LegIssuer",
					"type": "STRING"
				},
				{
					"number": "618",
					"name": "EncodedLegIssuerLen",
					"type": "LENGTH"
				},
				{
					"number": "619",
					"name": "EncodedLegIssuer",
					"type": "DATA"
				},
				{
					"number": "620",
					"name": "LegSecurityDesc",
					"type": "STRING"
				},
				{
					"number": "621",
					"name": "EncodedLegSecurityDescLen",
					"type": "LENGTH"
				},
				{
					"number": "622",
					"name": "EncodedLegSecurityDesc",
					"type": "DATA"
				},
				{
					"number": "623",
					"name": "LegRatioQty",
					"type": "FLOAT"
				},
				{
					"number": "624",
					"name": "LegSide",
					"type": "CHAR"
				},
				{
					"number": "625",
					"name": "TradingSessionSubID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "CALCULATED"
						},
						{
							"enum": "2",
							"description": "PRELIMINARY"
						},
						{
							"enum": "5",
							"description": "READY_TO_BOOK"
						},
						{
							"enum": "7",
							"description": "WAREHOUSE_INSTRUCTION"
						},
						{
							"enum": "8",
							"description": "REQUEST_TO_INTERMEDIARY"
						}
					],
					"number": "626",
					"name": "AllocType",
					"type": "INT"
				},
				{
					"number": "627",
					"name": "NoHops",
					"type": "NUMINGROUP"
				},
				{
					"number": "628",
					"name": "HopCompID",
					"type": "STRING"
				},
				{
					"number": "629",
					"name": "HopSendingTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"number": "630",
					"name": "HopRefID",
					"type": "SEQNUM"
				},
				{
					"number": "631",
					"name": "MidPx",
					"type": "PRICE"
				},
				{
					"number": "632",
					"name": "BidYield",
					"type": "PERCENTAGE"
				},
				{
					"number": "633",
					"name": "MidYield",
					"type": "PERCENTAGE"
				},
				{
					"number": "634",
					"name": "OfferYield",
					"type": "PERCENTAGE"
				},
				{
					"value": [
						{
							"enum": "B",
							"description": "CBOE_MEMBER"
						},
						{
							"enum": "C",
							"description": "NON_MEMBER_AND_CUSTOMER"
						},
						{
							"enum": "E",
							"description": "EQUITY_MEMBER_AND_CLEARING_MEMBER"
						},
						{
							"enum": "F",
							"description": "FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS"
						},
						{
							"enum": "H",
							"description": "106H_AND_106J_FIRMS"
						},
						{
							"enum": "I",
							"description": "GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS"
						},
						{
							"enum": "L",
							"description": "LESSEE_AND_106F_EMPLOYEES"
						},
						{
							"enum": "M",
							"description": "ALL_OTHER_OWNERSHIP_TYPES"
						},
						{
							"enum": "1",
							"description": "1ST_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT"
						},
						{
							"enum": "2",
							"description": "2ND_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT"
						},
						{
							"enum": "3",
							"description": "3RD_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT"
						},
						{
							"enum": "4",
							"description": "4TH_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT"
						},
						{
							"enum": "5",
							"description": "5TH_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT"
						},
						{
							"enum": "9",
							"description": "6TH_YEAR_AND_BEYOND_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT"
						}
					],
					"number": "635",
					"name": "ClearingFeeIndicator",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "636",
					"name": "WorkingIndicator",
					"type": "BOOLEAN"
				},
				{
					"number": "637",
					"name": "LegLastPx",
					"type": "PRICE"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "PRIORITY_UNCHANGED"
						},
						{
							"enum": "1",
							"description": "LOST_PRIORITY_AS_RESULT_OF_ORDER_CHANGE"
						}
					],
					"number": "638",
					"name": "PriorityIndicator",
					"type": "INT"
				},
				{
					"number": "639",
					"name": "PriceImprovement",
					"type": "PRICEOFFSET"
				},
				{
					"number": "640",
					"name": "Price2",
					"type": "PRICE"
				},
				{
					"number": "641",
					"name": "LastForwardPoints2",
					"type": "PRICEOFFSET"
				},
				{
					"number": "642",
					"name": "BidForwardPoints2",
					"type": "PRICEOFFSET"
				},
				{
					"number": "643",
					"name": "OfferForwardPoints2",
					"type": "PRICEOFFSET"
				},
				{
					"number": "644",
					"name": "RFQReqID",
					"type": "STRING"
				},
				{
					"number": "645",
					"name": "MktBidPx",
					"type": "PRICE"
				},
				{
					"number": "646",
					"name": "MktOfferPx",
					"type": "PRICE"
				},
				{
					"number": "647",
					"name": "MinBidSize",
					"type": "QTY"
				},
				{
					"number": "648",
					"name": "MinOfferSize",
					"type": "QTY"
				},
				{
					"number": "649",
					"name": "QuoteStatusReqID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "650",
					"name": "LegalConfirm",
					"type": "BOOLEAN"
				},
				{
					"number": "651",
					"name": "UnderlyingLastPx",
					"type": "PRICE"
				},
				{
					"number": "652",
					"name": "UnderlyingLastQty",
					"type": "QTY"
				},
				{
					"number": "654",
					"name": "LegRefID",
					"type": "STRING"
				},
				{
					"number": "655",
					"name": "ContraLegRefID",
					"type": "STRING"
				},
				{
					"number": "656",
					"name": "SettlCurrBidFxRate",
					"type": "FLOAT"
				},
				{
					"number": "657",
					"name": "SettlCurrOfferFxRate",
					"type": "FLOAT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "UNKNOWN_SYMBOL"
						},
						{
							"enum": "2",
							"description": "EXCHANGE"
						},
						{
							"enum": "3",
							"description": "QUOTE_REQUEST_EXCEEDS_LIMIT"
						},
						{
							"enum": "4",
							"description": "TOO_LATE_TO_ENTER"
						},
						{
							"enum": "5",
							"description": "INVALID_PRICE"
						},
						{
							"enum": "6",
							"description": "NOT_AUTHORIZED_TO_REQUEST_QUOTE"
						},
						{
							"enum": "7",
							"description": "NO_MATCH_FOR_INQUIRY"
						},
						{
							"enum": "8",
							"description": "NO_MARKET_FOR_INSTRUMENT"
						},
						{
							"enum": "9",
							"description": "NO_INVENTORY"
						},
						{
							"enum": "10",
							"description": "PASS"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "658",
					"name": "QuoteRequestRejectReason",
					"type": "INT"
				},
				{
					"number": "659",
					"name": "SideComplianceID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "BIC"
						},
						{
							"enum": "2",
							"description": "SID_CODE"
						},
						{
							"enum": "3",
							"description": "TFM"
						},
						{
							"enum": "4",
							"description": "OMGEO"
						},
						{
							"enum": "5",
							"description": "DTCC_CODE"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "660",
					"name": "AcctIDSource",
					"type": "INT"
				},
				{
					"number": "661",
					"name": "AllocAcctIDSource",
					"type": "INT"
				},
				{
					"number": "662",
					"name": "BenchmarkPrice",
					"type": "PRICE"
				},
				{
					"number": "663",
					"name": "BenchmarkPriceType",
					"type": "INT"
				},
				{
					"number": "664",
					"name": "ConfirmID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "RECEIVED"
						},
						{
							"enum": "2",
							"description": "MISMATCHED_ACCOUNT"
						},
						{
							"enum": "3",
							"description": "MISSING_SETTLEMENT_INSTRUCTIONS"
						},
						{
							"enum": "4",
							"description": "CONFIRMED"
						},
						{
							"enum": "5",
							"description": "REQUEST_REJECTED"
						}
					],
					"number": "665",
					"name": "ConfirmStatus",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NEW"
						},
						{
							"enum": "1",
							"description": "REPLACE"
						},
						{
							"enum": "2",
							"description": "CANCEL"
						}
					],
					"number": "666",
					"name": "ConfirmTransType",
					"type": "INT"
				},
				{
					"number": "667",
					"name": "ContractSettlMonth",
					"type": "MONTHYEAR"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "BOOKENTRY"
						},
						{
							"enum": "2",
							"description": "BEARER"
						}
					],
					"number": "668",
					"name": "DeliveryForm",
					"type": "INT"
				},
				{
					"number": "669",
					"name": "LastParPx",
					"type": "PRICE"
				},
				{
					"number": "670",
					"name": "NoLegAllocs",
					"type": "NUMINGROUP"
				},
				{
					"number": "671",
					"name": "LegAllocAccount",
					"type": "STRING"
				},
				{
					"number": "672",
					"name": "LegIndividualAllocID",
					"type": "STRING"
				},
				{
					"number": "673",
					"name": "LegAllocQty",
					"type": "QTY"
				},
				{
					"number": "674",
					"name": "LegAllocAcctIDSource",
					"type": "STRING"
				},
				{
					"number": "675",
					"name": "LegSettlCurrency",
					"type": "CURRENCY"
				},
				{
					"number": "676",
					"name": "LegBenchmarkCurveCurrency",
					"type": "CURRENCY"
				},
				{
					"number": "677",
					"name": "LegBenchmarkCurveName",
					"type": "STRING"
				},
				{
					"number": "678",
					"name": "LegBenchmarkCurvePoint",
					"type": "STRING"
				},
				{
					"number": "679",
					"name": "LegBenchmarkPrice",
					"type": "PRICE"
				},
				{
					"number": "680",
					"name": "LegBenchmarkPriceType",
					"type": "INT"
				},
				{
					"number": "681",
					"name": "LegBidPx",
					"type": "PRICE"
				},
				{
					"number": "682",
					"name": "LegIOIQty",
					"type": "STRING"
				},
				{
					"number": "683",
					"name": "NoLegStipulations",
					"type": "NUMINGROUP"
				},
				{
					"number": "684",
					"name": "LegOfferPx",
					"type": "PRICE"
				},
				{
					"number": "686",
					"name": "LegPriceType",
					"type": "INT"
				},
				{
					"number": "687",
					"name": "LegQty",
					"type": "QTY"
				},
				{
					"number": "688",
					"name": "LegStipulationType",
					"type": "STRING"
				},
				{
					"number": "689",
					"name": "LegStipulationValue",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "PAR_FOR_PAR"
						},
						{
							"enum": "2",
							"description": "MODIFIED_DURATION"
						},
						{
							"enum": "4",
							"description": "RISK"
						},
						{
							"enum": "5",
							"description": "PROCEEDS"
						}
					],
					"number": "690",
					"name": "LegSwapType",
					"type": "INT"
				},
				{
					"number": "691",
					"name": "Pool",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "PERCENT"
						},
						{
							"enum": "2",
							"description": "PER_SHARE"
						},
						{
							"enum": "3",
							"description": "FIXED_AMOUNT"
						},
						{
							"enum": "4",
							"description": "DISCOUNT_PERCENTAGE_POINTS_BELOW_PAR"
						},
						{
							"enum": "5",
							"description": "PREMIUM_PERCENTAGE_POINTS_OVER_PAR"
						},
						{
							"enum": "6",
							"description": "BASIS_POINTS_RELATIVE_TO_BENCHMARK"
						},
						{
							"enum": "7",
							"description": "TED_PRICE"
						},
						{
							"enum": "8",
							"description": "TED_YIELD"
						},
						{
							"enum": "9",
							"description": "YIELD_SPREAD"
						},
						{
							"enum": "10",
							"description": "YIELD"
						}
					],
					"number": "692",
					"name": "QuotePriceType",
					"type": "INT"
				},
				{
					"number": "693",
					"name": "QuoteRespID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "HIT_LIFT"
						},
						{
							"enum": "2",
							"description": "COUNTER"
						},
						{
							"enum": "3",
							"description": "EXPIRED"
						},
						{
							"enum": "4",
							"description": "COVER"
						},
						{
							"enum": "5",
							"description": "DONE_AWAY"
						},
						{
							"enum": "6",
							"description": "PASS"
						}
					],
					"number": "694",
					"name": "QuoteRespType",
					"type": "INT"
				},
				{
					"number": "695",
					"name": "QuoteQualifier",
					"type": "CHAR"
				},
				{
					"number": "696",
					"name": "YieldRedemptionDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "697",
					"name": "YieldRedemptionPrice",
					"type": "PRICE"
				},
				{
					"number": "698",
					"name": "YieldRedemptionPriceType",
					"type": "INT"
				},
				{
					"number": "699",
					"name": "BenchmarkSecurityID",
					"type": "STRING"
				},
				{
					"number": "700",
					"name": "ReversalIndicator",
					"type": "BOOLEAN"
				},
				{
					"number": "701",
					"name": "YieldCalcDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "702",
					"name": "NoPositions",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "TQ",
							"description": "TRANSACTION_QUANTITY"
						},
						{
							"enum": "IAS",
							"description": "INTRA_SPREAD_QTY"
						},
						{
							"enum": "IES",
							"description": "INTER_SPREAD_QTY"
						},
						{
							"enum": "FIN",
							"description": "END_OF_DAY_QTY"
						},
						{
							"enum": "SOD",
							"description": "START_OF_DAY_QTY"
						},
						{
							"enum": "EX",
							"description": "OPTION_EXERCISE_QTY"
						},
						{
							"enum": "AS",
							"description": "OPTION_ASSIGNMENT"
						},
						{
							"enum": "TX",
							"description": "TRANSACTION_FROM_EXERCISE"
						},
						{
							"enum": "TA",
							"description": "TRANSACTION_FROM_ASSIGNMENT"
						},
						{
							"enum": "PIT",
							"description": "PIT_TRADE_QTY"
						},
						{
							"enum": "TRF",
							"description": "TRANSFER_TRADE_QTY"
						},
						{
							"enum": "ETR",
							"description": "ELECTRONIC_TRADE_QTY"
						},
						{
							"enum": "ALC",
							"description": "ALLOCATION_TRADE_QTY"
						},
						{
							"enum": "PA",
							"description": "ADJUSTMENT_QTY"
						},
						{
							"enum": "ASF",
							"description": "AS_OF_TRADE_QTY"
						},
						{
							"enum": "DLV",
							"description": "DELIVERY_QTY"
						},
						{
							"enum": "TOT",
							"description": "TOTAL_TRANSACTION_QTY"
						},
						{
							"enum": "XM",
							"description": "CROSS_MARGIN_QTY"
						},
						{
							"enum": "SPL",
							"description": "INTEGRAL_SPLIT"
						}
					],
					"number": "703",
					"name": "PosType",
					"type": "STRING"
				},
				{
					"number": "704",
					"name": "LongQty",
					"type": "QTY"
				},
				{
					"number": "705",
					"name": "ShortQty",
					"type": "QTY"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "SUBMITTED"
						},
						{
							"enum": "1",
							"description": "ACCEPTED"
						},
						{
							"enum": "2",
							"description": "REJECTED"
						}
					],
					"number": "706",
					"name": "PosQtyStatus",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "FMTM",
							"description": "FINAL_MARK_TO_MARKET_AMOUNT"
						},
						{
							"enum": "IMTM",
							"description": "INCREMENTAL_MARK_TO_MARKET_AMOUNT"
						},
						{
							"enum": "TVAR",
							"description": "TRADE_VARIATION_AMOUNT"
						},
						{
							"enum": "SMTM",
							"description": "START_OF_DAY_MARK_TO_MARKET_AMOUNT"
						},
						{
							"enum": "PREM",
							"description": "PREMIUM_AMOUNT"
						},
						{
							"enum": "CRES",
							"description": "CASH_RESIDUAL_AMOUNT"
						},
						{
							"enum": "CASH",
							"description": "CASH_AMOUNT"
						},
						{
							"enum": "VADJ",
							"description": "VALUE_ADJUSTED_AMOUNT"
						}
					],
					"number": "707",
					"name": "PosAmtType",
					"type": "STRING"
				},
				{
					"number": "708",
					"name": "PosAmt",
					"type": "AMT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "EXERCISE"
						},
						{
							"enum": "2",
							"description": "DO_NOT_EXERCISE"
						},
						{
							"enum": "3",
							"description": "POSITION_ADJUSTMENT"
						},
						{
							"enum": "4",
							"description": "POSITION_CHANGE_SUBMISSION_MARGIN_DISPOSITION"
						},
						{
							"enum": "5",
							"description": "PLEDGE"
						}
					],
					"number": "709",
					"name": "PosTransType",
					"type": "INT"
				},
				{
					"number": "710",
					"name": "PosReqID",
					"type": "STRING"
				},
				{
					"number": "711",
					"name": "NoUnderlyings",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "NEW_USED_TO_INCREMENT_THE_OVERALL_TRANSACTION_QUANTITY"
						},
						{
							"enum": "2",
							"description": "REPLACE_USED_TO_OVERRIDE_THE_OVERALL_TRANSACTION_QUANTITY_OR_SPECIFIC_ADD_MESSAGES_BASED_ON_THE_REFERENCE_ID"
						},
						{
							"enum": "3",
							"description": "CANCEL_USED_TO_REMOVE_THE_OVERALL_TRANSACTION_OR_SPECIFIC_ADD_MESSAGES_BASED_ON_REFERENCE_ID"
						}
					],
					"number": "712",
					"name": "PosMaintAction",
					"type": "INT"
				},
				{
					"number": "713",
					"name": "OrigPosReqRefID",
					"type": "STRING"
				},
				{
					"number": "714",
					"name": "PosMaintRptRefID",
					"type": "STRING"
				},
				{
					"number": "715",
					"name": "ClearingBusinessDate",
					"type": "LOCALMKTDATE"
				},
				{
					"value": [
						{
							"enum": "ITD",
							"description": "INTRADAY"
						},
						{
							"enum": "RTH",
							"description": "REGULAR_TRADING_HOURS"
						},
						{
							"enum": "ETH",
							"description": "ELECTRONIC_TRADING_HOURS"
						}
					],
					"number": "716",
					"name": "SettlSessID",
					"type": "STRING"
				},
				{
					"number": "717",
					"name": "SettlSessSubID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "PROCESS_REQUEST_AS_MARGIN_DISPOSITION"
						},
						{
							"enum": "1",
							"description": "DELTA_PLUS"
						},
						{
							"enum": "2",
							"description": "DELTA_MINUS"
						},
						{
							"enum": "3",
							"description": "FINAL"
						}
					],
					"number": "718",
					"name": "AdjustmentType",
					"type": "INT"
				},
				{
					"number": "719",
					"name": "ContraryInstructionIndicator",
					"type": "BOOLEAN"
				},
				{
					"number": "720",
					"name": "PriorSpreadIndicator",
					"type": "BOOLEAN"
				},
				{
					"number": "721",
					"name": "PosMaintRptID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "ACCEPTED"
						},
						{
							"enum": "1",
							"description": "ACCEPTED_WITH_WARNINGS"
						},
						{
							"enum": "2",
							"description": "REJECTED"
						},
						{
							"enum": "3",
							"description": "COMPLETED"
						},
						{
							"enum": "4",
							"description": "COMPLETED_WITH_WARNINGS"
						}
					],
					"number": "722",
					"name": "PosMaintStatus",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "SUCCESSFUL_COMPLETION"
						},
						{
							"enum": "1",
							"description": "REJECTED"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "723",
					"name": "PosMaintResult",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "POSITIONS"
						},
						{
							"enum": "1",
							"description": "TRADES"
						},
						{
							"enum": "2",
							"description": "EXERCISES"
						},
						{
							"enum": "3",
							"description": "ASSIGNMENTS"
						}
					],
					"number": "724",
					"name": "PosReqType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "INBAND_TRANSPORT_THE_REQUEST_WAS_SENT_OVER"
						},
						{
							"enum": "1",
							"description": "OUT_OF_BAND_PRE_ARRANGED_OUT_OF_BAND_DELIVERY_MECHANISM"
						}
					],
					"number": "725",
					"name": "ResponseTransportType",
					"type": "INT"
				},
				{
					"number": "726",
					"name": "ResponseDestination",
					"type": "STRING"
				},
				{
					"number": "727",
					"name": "TotalNumPosReports",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "VALID_REQUEST"
						},
						{
							"enum": "1",
							"description": "INVALID_OR_UNSUPPORTED_REQUEST"
						},
						{
							"enum": "2",
							"description": "NO_POSITIONS_FOUND_THAT_MATCH_CRITERIA"
						},
						{
							"enum": "3",
							"description": "NOT_AUTHORIZED_TO_REQUEST_POSITIONS"
						},
						{
							"enum": "4",
							"description": "REQUEST_FOR_POSITION_NOT_SUPPORTED"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "728",
					"name": "PosReqResult",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "COMPLETED"
						},
						{
							"enum": "1",
							"description": "COMPLETED_WITH_WARNINGS"
						},
						{
							"enum": "2",
							"description": "REJECTED"
						}
					],
					"number": "729",
					"name": "PosReqStatus",
					"type": "INT"
				},
				{
					"number": "730",
					"name": "SettlPrice",
					"type": "PRICE"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "FINAL"
						},
						{
							"enum": "2",
							"description": "THEORETICAL"
						}
					],
					"number": "731",
					"name": "SettlPriceType",
					"type": "INT"
				},
				{
					"number": "732",
					"name": "UnderlyingSettlPrice",
					"type": "PRICE"
				},
				{
					"number": "733",
					"name": "UnderlyingSettlPriceType",
					"type": "INT"
				},
				{
					"number": "734",
					"name": "PriorSettlPrice",
					"type": "PRICE"
				},
				{
					"number": "735",
					"name": "NoQuoteQualifiers",
					"type": "NUMINGROUP"
				},
				{
					"number": "736",
					"name": "AllocSettlCurrency",
					"type": "CURRENCY"
				},
				{
					"number": "737",
					"name": "AllocSettlCurrAmt",
					"type": "AMT"
				},
				{
					"number": "738",
					"name": "InterestAtMaturity",
					"type": "AMT"
				},
				{
					"number": "739",
					"name": "LegDatedDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "740",
					"name": "LegPool",
					"type": "STRING"
				},
				{
					"number": "741",
					"name": "AllocInterestAtMaturity",
					"type": "AMT"
				},
				{
					"number": "742",
					"name": "AllocAccruedInterestAmt",
					"type": "AMT"
				},
				{
					"number": "743",
					"name": "DeliveryDate",
					"type": "LOCALMKTDATE"
				},
				{
					"value": [
						{
							"enum": "R",
							"description": "RANDOM"
						},
						{
							"enum": "P",
							"description": "PRORATA"
						}
					],
					"number": "744",
					"name": "AssignmentMethod",
					"type": "CHAR"
				},
				{
					"number": "745",
					"name": "AssignmentUnit",
					"type": "QTY"
				},
				{
					"number": "746",
					"name": "OpenInterest",
					"type": "AMT"
				},
				{
					"value": [
						{
							"enum": "A",
							"description": "AUTOMATIC"
						},
						{
							"enum": "M",
							"description": "MANUAL"
						}
					],
					"number": "747",
					"name": "ExerciseMethod",
					"type": "CHAR"
				},
				{
					"number": "748",
					"name": "TotNumTradeReports",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "SUCCESSFUL"
						},
						{
							"enum": "1",
							"description": "INVALID_OR_UNKNOWN_INSTRUMENT"
						},
						{
							"enum": "2",
							"description": "INVALID_TYPE_OF_TRADE_REQUESTED"
						},
						{
							"enum": "3",
							"description": "INVALID_PARTIES"
						},
						{
							"enum": "4",
							"description": "INVALID_TRANSPORT_TYPE_REQUESTED"
						},
						{
							"enum": "5",
							"description": "INVALID_DESTINATION_REQUESTED"
						},
						{
							"enum": "8",
							"description": "TRADEREQUESTTYPE_NOT_SUPPORTED"
						},
						{
							"enum": "9",
							"description": "UNAUTHORIZED_FOR_TRADE_CAPTURE_REPORT_REQUEST"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "749",
					"name": "TradeRequestResult",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "ACCEPTED"
						},
						{
							"enum": "1",
							"description": "COMPLETED"
						},
						{
							"enum": "2",
							"description": "REJECTED"
						}
					],
					"number": "750",
					"name": "TradeRequestStatus",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "SUCCESSFUL"
						},
						{
							"enum": "1",
							"description": "INVALID_PARTY_INFORMATION"
						},
						{
							"enum": "2",
							"description": "UNKNOWN_INSTRUMENT"
						},
						{
							"enum": "3",
							"description": "UNAUTHORIZED_TO_REPORT_TRADES"
						},
						{
							"enum": "4",
							"description": "INVALID_TRADE_TYPE"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "751",
					"name": "TradeReportRejectReason",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "SINGLE_SECURITY"
						},
						{
							"enum": "2",
							"description": "INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY"
						},
						{
							"enum": "3",
							"description": "MULTI_LEG_SECURITY"
						}
					],
					"number": "752",
					"name": "SideMultiLegReportingType",
					"type": "INT"
				},
				{
					"number": "753",
					"name": "NoPosAmt",
					"type": "NUMINGROUP"
				},
				{
					"number": "754",
					"name": "AutoAcceptIndicator",
					"type": "BOOLEAN"
				},
				{
					"number": "755",
					"name": "AllocReportID",
					"type": "STRING"
				},
				{
					"number": "756",
					"name": "NoNested2PartyIDs",
					"type": "NUMINGROUP"
				},
				{
					"number": "757",
					"name": "Nested2PartyID",
					"type": "STRING"
				},
				{
					"number": "758",
					"name": "Nested2PartyIDSource",
					"type": "CHAR"
				},
				{
					"number": "759",
					"name": "Nested2PartyRole",
					"type": "INT"
				},
				{
					"number": "760",
					"name": "Nested2PartySubID",
					"type": "STRING"
				},
				{
					"number": "761",
					"name": "BenchmarkSecurityIDSource",
					"type": "STRING"
				},
				{
					"number": "762",
					"name": "SecuritySubType",
					"type": "STRING"
				},
				{
					"number": "763",
					"name": "UnderlyingSecuritySubType",
					"type": "STRING"
				},
				{
					"number": "764",
					"name": "LegSecuritySubType",
					"type": "STRING"
				},
				{
					"number": "765",
					"name": "AllowableOneSidednessPct",
					"type": "PERCENTAGE"
				},
				{
					"number": "766",
					"name": "AllowableOneSidednessValue",
					"type": "AMT"
				},
				{
					"number": "767",
					"name": "AllowableOneSidednessCurr",
					"type": "CURRENCY"
				},
				{
					"number": "768",
					"name": "NoTrdRegTimestamps",
					"type": "NUMINGROUP"
				},
				{
					"number": "769",
					"name": "TrdRegTimestamp",
					"type": "UTCTIMESTAMP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "EXECUTION_TIME"
						},
						{
							"enum": "2",
							"description": "TIME_IN"
						},
						{
							"enum": "3",
							"description": "TIME_OUT"
						},
						{
							"enum": "4",
							"description": "BROKER_RECEIPT"
						},
						{
							"enum": "5",
							"description": "BROKER_EXECUTION"
						}
					],
					"number": "770",
					"name": "TrdRegTimestampType",
					"type": "INT"
				},
				{
					"number": "771",
					"name": "TrdRegTimestampOrigin",
					"type": "STRING"
				},
				{
					"number": "772",
					"name": "ConfirmRefID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "STATUS"
						},
						{
							"enum": "2",
							"description": "CONFIRMATION"
						},
						{
							"enum": "3",
							"description": "CONFIRMATION_REQUEST_REJECTED"
						}
					],
					"number": "773",
					"name": "ConfirmType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "MISMATCHED_ACCOUNT"
						},
						{
							"enum": "2",
							"description": "MISSING_SETTLEMENT_INSTRUCTIONS"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "774",
					"name": "ConfirmRejReason",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "REGULAR_BOOKING"
						},
						{
							"enum": "1",
							"description": "CFD"
						},
						{
							"enum": "2",
							"description": "TOTAL_RETURN_SWAP"
						}
					],
					"number": "775",
					"name": "BookingType",
					"type": "INT"
				},
				{
					"number": "776",
					"name": "IndividualAllocRejCode",
					"type": "INT"
				},
				{
					"number": "777",
					"name": "SettlInstMsgID",
					"type": "STRING"
				},
				{
					"number": "778",
					"name": "NoSettlInst",
					"type": "NUMINGROUP"
				},
				{
					"number": "779",
					"name": "LastUpdateTime",
					"type": "UTCTIMESTAMP"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "USE_DEFAULT_INSTRUCTIONS"
						},
						{
							"enum": "1",
							"description": "DERIVE_FROM_PARAMETERS_PROVIDED"
						},
						{
							"enum": "2",
							"description": "FULL_DETAILS_PROVIDED"
						},
						{
							"enum": "3",
							"description": "SSI_DB_IDS_PROVIDED"
						},
						{
							"enum": "4",
							"description": "PHONE_FOR_INSTRUCTIONS"
						}
					],
					"number": "780",
					"name": "AllocSettlInstType",
					"type": "INT"
				},
				{
					"number": "781",
					"name": "NoSettlPartyIDs",
					"type": "NUMINGROUP"
				},
				{
					"number": "782",
					"name": "SettlPartyID",
					"type": "STRING"
				},
				{
					"number": "783",
					"name": "SettlPartyIDSource",
					"type": "CHAR"
				},
				{
					"number": "784",
					"name": "SettlPartyRole",
					"type": "INT"
				},
				{
					"number": "785",
					"name": "SettlPartySubID",
					"type": "STRING"
				},
				{
					"number": "786",
					"name": "SettlPartySubIDType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "S",
							"description": "SECURITIES"
						},
						{
							"enum": "C",
							"description": "CASH"
						}
					],
					"number": "787",
					"name": "DlvyInstType",
					"type": "CHAR"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "OVERNIGHT"
						},
						{
							"enum": "2",
							"description": "TERM"
						},
						{
							"enum": "3",
							"description": "FLEXIBLE"
						},
						{
							"enum": "4",
							"description": "OPEN"
						}
					],
					"number": "788",
					"name": "TerminationType",
					"type": "INT"
				},
				{
					"number": "789",
					"name": "NextExpectedMsgSeqNum",
					"type": "SEQNUM"
				},
				{
					"number": "790",
					"name": "OrdStatusReqID",
					"type": "STRING"
				},
				{
					"number": "791",
					"name": "SettlInstReqID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "UNABLE_TO_PROCESS_REQUEST"
						},
						{
							"enum": "1",
							"description": "UNKNOWN_ACCOUNT"
						},
						{
							"enum": "2",
							"description": "NO_MATCHING_SETTLEMENT_INSTRUCTIONS_FOUND"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "792",
					"name": "SettlInstReqRejCode",
					"type": "INT"
				},
				{
					"number": "793",
					"name": "SecondaryAllocID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "3",
							"description": "SELLSIDE_CALCULATED_USING_PRELIMINARY"
						},
						{
							"enum": "4",
							"description": "SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY"
						},
						{
							"enum": "5",
							"description": "WAREHOUSE_RECAP"
						},
						{
							"enum": "8",
							"description": "REQUEST_TO_INTERMEDIARY"
						}
					],
					"number": "794",
					"name": "AllocReportType",
					"type": "INT"
				},
				{
					"number": "795",
					"name": "AllocReportRefID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "ORIGINAL_DETAILS_INCOMPLETE_INCORRECT"
						},
						{
							"enum": "2",
							"description": "CHANGE_IN_UNDERLYING_ORDER_DETAILS"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "796",
					"name": "AllocCancReplaceReason",
					"type": "INT"
				},
				{
					"number": "797",
					"name": "CopyMsgIndicator",
					"type": "BOOLEAN"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS"
						},
						{
							"enum": "2",
							"description": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS"
						},
						{
							"enum": "3",
							"description": "HOUSE_TRADER"
						},
						{
							"enum": "4",
							"description": "FLOOR_TRADER"
						},
						{
							"enum": "6",
							"description": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED"
						},
						{
							"enum": "7",
							"description": "ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED"
						},
						{
							"enum": "8",
							"description": "JOINT_BACKOFFICE_ACCOUNT"
						}
					],
					"number": "798",
					"name": "AllocAccountType",
					"type": "INT"
				},
				{
					"number": "799",
					"name": "OrderAvgPx",
					"type": "PRICE"
				},
				{
					"number": "800",
					"name": "OrderBookingQty",
					"type": "QTY"
				},
				{
					"number": "801",
					"name": "NoSettlPartySubIDs",
					"type": "NUMINGROUP"
				},
				{
					"number": "802",
					"name": "NoPartySubIDs",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "FIRM"
						},
						{
							"enum": "2",
							"description": "PERSON"
						},
						{
							"enum": "3",
							"description": "SYSTEM"
						},
						{
							"enum": "4",
							"description": "APPLICATION"
						},
						{
							"enum": "5",
							"description": "FULL_LEGAL_NAME_OF_FIRM"
						},
						{
							"enum": "6",
							"description": "POSTAL_ADDRESS"
						},
						{
							"enum": "7",
							"description": "PHONE_NUMBER"
						},
						{
							"enum": "8",
							"description": "EMAIL_ADDRESS"
						},
						{
							"enum": "9",
							"description": "CONTACT_NAME"
						},
						{
							"enum": "10",
							"description": "SECURITIES_ACCOUNT_NUMBER"
						},
						{
							"enum": "11",
							"description": "REGISTRATION_NUMBER"
						},
						{
							"enum": "12",
							"description": "REGISTERED_ADDRESS_12"
						},
						{
							"enum": "13",
							"description": "REGULATORY_STATUS"
						},
						{
							"enum": "14",
							"description": "REGISTRATION_NAME"
						},
						{
							"enum": "15",
							"description": "CASH_ACCOUNT_NUMBER"
						},
						{
							"enum": "16",
							"description": "BIC"
						},
						{
							"enum": "17",
							"description": "CSD_PARTICIPANT_MEMBER_CODE"
						},
						{
							"enum": "18",
							"description": "REGISTERED_ADDRESS_18"
						},
						{
							"enum": "19",
							"description": "FUND_ACCOUNT_NAME"
						},
						{
							"enum": "20",
							"description": "TELEX_NUMBER"
						},
						{
							"enum": "21",
							"description": "FAX_NUMBER"
						},
						{
							"enum": "22",
							"description": "SECURITIES_ACCOUNT_NAME"
						},
						{
							"enum": "23",
							"description": "CASH_ACCOUNT_NAME"
						},
						{
							"enum": "24",
							"description": "DEPARTMENT"
						},
						{
							"enum": "25",
							"description": "LOCATION"
						},
						{
							"enum": "26",
							"description": "POSITION_ACCOUNT_TYPE"
						}
					],
					"number": "803",
					"name": "PartySubIDType",
					"type": "INT"
				},
				{
					"number": "804",
					"name": "NoNestedPartySubIDs",
					"type": "NUMINGROUP"
				},
				{
					"number": "805",
					"name": "NestedPartySubIDType",
					"type": "INT"
				},
				{
					"number": "806",
					"name": "NoNested2PartySubIDs",
					"type": "NUMINGROUP"
				},
				{
					"number": "807",
					"name": "Nested2PartySubIDType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "PENDING_ACCEPT"
						},
						{
							"enum": "2",
							"description": "PENDING_RELEASE"
						},
						{
							"enum": "3",
							"description": "PENDING_REVERSAL"
						},
						{
							"enum": "4",
							"description": "ACCEPT"
						},
						{
							"enum": "5",
							"description": "BLOCK_LEVEL_REJECT"
						},
						{
							"enum": "6",
							"description": "ACCOUNT_LEVEL_REJECT"
						}
					],
					"number": "808",
					"name": "AllocIntermedReqType",
					"type": "INT"
				},
				{
					"number": "810",
					"name": "UnderlyingPx",
					"type": "PRICE"
				},
				{
					"number": "811",
					"name": "PriceDelta",
					"type": "FLOAT"
				},
				{
					"number": "812",
					"name": "ApplQueueMax",
					"type": "INT"
				},
				{
					"number": "813",
					"name": "ApplQueueDepth",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NO_ACTION_TAKEN"
						},
						{
							"enum": "1",
							"description": "QUEUE_FLUSHED"
						},
						{
							"enum": "2",
							"description": "OVERLAY_LAST"
						},
						{
							"enum": "3",
							"description": "END_SESSION"
						}
					],
					"number": "814",
					"name": "ApplQueueResolution",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NO_ACTION_TAKEN"
						},
						{
							"enum": "1",
							"description": "QUEUE_FLUSHED"
						},
						{
							"enum": "2",
							"description": "OVERLAY_LAST"
						},
						{
							"enum": "3",
							"description": "END_SESSION"
						}
					],
					"number": "815",
					"name": "ApplQueueAction",
					"type": "INT"
				},
				{
					"number": "816",
					"name": "NoAltMDSource",
					"type": "NUMINGROUP"
				},
				{
					"number": "817",
					"name": "AltMDSourceID",
					"type": "STRING"
				},
				{
					"number": "818",
					"name": "SecondaryTradeReportID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NO_AVERAGE_PRICING"
						},
						{
							"enum": "1",
							"description": "TRADE_IS_PART_OF_AN_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID"
						},
						{
							"enum": "2",
							"description": "LAST_TRADE_IN_THE_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID"
						}
					],
					"number": "819",
					"name": "AvgPxIndicator",
					"type": "INT"
				},
				{
					"number": "820",
					"name": "TradeLinkID",
					"type": "STRING"
				},
				{
					"number": "821",
					"name": "OrderInputDevice",
					"type": "STRING"
				},
				{
					"number": "822",
					"name": "UnderlyingTradingSessionID",
					"type": "STRING"
				},
				{
					"number": "823",
					"name": "UnderlyingTradingSessionSubID",
					"type": "STRING"
				},
				{
					"number": "824",
					"name": "TradeLegRefID",
					"type": "STRING"
				},
				{
					"number": "825",
					"name": "ExchangeRule",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "ALLOCATION_NOT_REQUIRED"
						},
						{
							"enum": "1",
							"description": "ALLOCATION_REQUIRED"
						},
						{
							"enum": "2",
							"description": "USE_ALLOCATION_PROVIDED_WITH_THE_TRADE"
						}
					],
					"number": "826",
					"name": "TradeAllocIndicator",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "EXPIRE_ON_TRADING_SESSION_CLOSE"
						},
						{
							"enum": "1",
							"description": "EXPIRE_ON_TRADING_SESSION_OPEN"
						}
					],
					"number": "827",
					"name": "ExpirationCycle",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "REGULAR_TRADE"
						},
						{
							"enum": "1",
							"description": "BLOCK_TRADE"
						},
						{
							"enum": "2",
							"description": "EFP"
						},
						{
							"enum": "3",
							"description": "TRANSFER"
						},
						{
							"enum": "4",
							"description": "LATE_TRADE"
						},
						{
							"enum": "5",
							"description": "T_TRADE"
						},
						{
							"enum": "6",
							"description": "WEIGHTED_AVERAGE_PRICE_TRADE"
						},
						{
							"enum": "7",
							"description": "BUNCHED_TRADE"
						},
						{
							"enum": "8",
							"description": "LATE_BUNCHED_TRADE"
						},
						{
							"enum": "9",
							"description": "PRIOR_REFERENCE_PRICE_TRADE"
						},
						{
							"enum": "10",
							"description": "AFTER_HOURS_TRADE"
						}
					],
					"number": "828",
					"name": "TrdType",
					"type": "INT"
				},
				{
					"number": "829",
					"name": "TrdSubType",
					"type": "INT"
				},
				{
					"number": "830",
					"name": "TransferReason",
					"type": "STRING"
				},
				{
					"number": "832",
					"name": "TotNumAssignmentReports",
					"type": "INT"
				},
				{
					"number": "833",
					"name": "AsgnRptID",
					"type": "STRING"
				},
				{
					"number": "834",
					"name": "ThresholdAmount",
					"type": "PRICEOFFSET"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "FLOATING"
						},
						{
							"enum": "1",
							"description": "FIXED"
						}
					],
					"number": "835",
					"name": "PegMoveType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "PRICE"
						},
						{
							"enum": "1",
							"description": "BASIS_POINTS"
						},
						{
							"enum": "2",
							"description": "TICKS"
						},
						{
							"enum": "3",
							"description": "PRICE_TIER"
						}
					],
					"number": "836",
					"name": "PegOffsetType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "OR_BETTER"
						},
						{
							"enum": "1",
							"description": "STRICT_LIMIT_IS_A_STRICT_LIMIT"
						},
						{
							"enum": "2",
							"description": "OR_WORSE_FOR_A_BUY_THE_PEG_LIMIT_IS_A_MINIMUM_AND_FOR_A_SELL_THE_PEG_LIMIT_IS_A_MAXIMUM"
						}
					],
					"number": "837",
					"name": "PegLimitType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "MORE_AGGRESSIVE_ON_A_BUY_ORDER_ROUND_THE_PRICE_UP_ROUND_UP_TO_THE_NEAREST_TICK_ON_A_SELL_ROUND_DOWN_TO_THE_NEAREST_TICK"
						},
						{
							"enum": "2",
							"description": "MORE_PASSIVE_ON_A_BUY_ORDER_ROUND_DOWN_TO_NEAREST_TICK_ON_A_SELL_ORDER_ROUND_UP_TO_NEAREST_TICK"
						}
					],
					"number": "838",
					"name": "PegRoundDirection",
					"type": "INT"
				},
				{
					"number": "839",
					"name": "PeggedPrice",
					"type": "PRICE"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "LOCAL"
						},
						{
							"enum": "2",
							"description": "NATIONAL"
						},
						{
							"enum": "3",
							"description": "GLOBAL"
						},
						{
							"enum": "4",
							"description": "NATIONAL_EXCLUDING_LOCAL"
						}
					],
					"number": "840",
					"name": "PegScope",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "FLOATING"
						},
						{
							"enum": "1",
							"description": "FIXED"
						}
					],
					"number": "841",
					"name": "DiscretionMoveType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "PRICE"
						},
						{
							"enum": "1",
							"description": "BASIS_POINTS"
						},
						{
							"enum": "2",
							"description": "TICKS"
						},
						{
							"enum": "3",
							"description": "PRICE_TIER"
						}
					],
					"number": "842",
					"name": "DiscretionOffsetType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "OR_BETTER"
						},
						{
							"enum": "1",
							"description": "STRICT_LIMIT_IS_A_STRICT_LIMIT"
						},
						{
							"enum": "2",
							"description": "OR_WORSE_FOR_A_BUY_THE_DISCRETION_PRICE_IS_A_MINIMUM_AND_FOR_A_SELL_THE_DISCRETION_PRICE_IS_A_MAXIMUM"
						}
					],
					"number": "843",
					"name": "DiscretionLimitType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "MORE_AGGRESSIVE_ON_A_BUY_ORDER_ROUND_THE_PRICE_UP_ROUND_UP_TO_THE_NEAREST_TICK_ON_A_SELL_ROUND_DOWN_TO_THE_NEAREST_TICK"
						},
						{
							"enum": "2",
							"description": "MORE_PASSIVE_ON_A_BUY_ORDER_ROUND_DOWN_TO_NEAREST_TICK_ON_A_SELL_ORDER_ROUND_UP_TO_NEAREST_TICK"
						}
					],
					"number": "844",
					"name": "DiscretionRoundDirection",
					"type": "INT"
				},
				{
					"number": "845",
					"name": "DiscretionPrice",
					"type": "PRICE"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "LOCAL"
						},
						{
							"enum": "2",
							"description": "NATIONAL"
						},
						{
							"enum": "3",
							"description": "GLOBAL"
						},
						{
							"enum": "4",
							"description": "NATIONAL_EXCLUDING_LOCAL"
						}
					],
					"number": "846",
					"name": "DiscretionScope",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "VWAP"
						},
						{
							"enum": "2",
							"description": "PARTICIPATE"
						},
						{
							"enum": "3",
							"description": "MININIZE_MARKET_IMPACT"
						}
					],
					"number": "847",
					"name": "TargetStrategy",
					"type": "INT"
				},
				{
					"number": "848",
					"name": "TargetStrategyParameters",
					"type": "STRING"
				},
				{
					"number": "849",
					"name": "ParticipationRate",
					"type": "PERCENTAGE"
				},
				{
					"number": "850",
					"name": "TargetStrategyPerformance",
					"type": "FLOAT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "ADDED_LIQUIDITY"
						},
						{
							"enum": "2",
							"description": "REMOVED_LIQUIDITY"
						},
						{
							"enum": "3",
							"description": "LIQUIDITY_ROUTED_OUT"
						}
					],
					"number": "851",
					"name": "LastLiquidityInd",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "852",
					"name": "PublishTrdIndicator",
					"type": "BOOLEAN"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "DEALER_SOLD_SHORT"
						},
						{
							"enum": "1",
							"description": "DEALER_SOLD_SHORT_EXEMPT"
						},
						{
							"enum": "2",
							"description": "SELLING_CUSTOMER_SOLD_SHORT"
						},
						{
							"enum": "3",
							"description": "SELLING_CUSTOMER_SOLD_SHORT_EXEMPT"
						},
						{
							"enum": "4",
							"description": "QUALIFED_SERVICE_REPRESENTATIVE"
						},
						{
							"enum": "5",
							"description": "QSR_OR_AGU_CONTRA_SIDE_SOLD_SHORT_EXEMPT"
						}
					],
					"number": "853",
					"name": "ShortSaleReason",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "UNITS"
						},
						{
							"enum": "1",
							"description": "CONTRACTS"
						}
					],
					"number": "854",
					"name": "QtyType",
					"type": "INT"
				},
				{
					"number": "855",
					"name": "SecondaryTrdType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "SUBMIT"
						},
						{
							"enum": "1",
							"description": "ALLEGED"
						},
						{
							"enum": "2",
							"description": "ACCEPT"
						},
						{
							"enum": "3",
							"description": "DECLINE"
						},
						{
							"enum": "4",
							"description": "ADDENDUM"
						},
						{
							"enum": "5",
							"description": "NO_WAS"
						},
						{
							"enum": "6",
							"description": "TRADE_REPORT_CANCEL"
						},
						{
							"enum": "7",
							"description": "LOCKED_IN_TRADE_BREAK"
						}
					],
					"number": "856",
					"name": "TradeReportType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NOT_SPECIFIED"
						},
						{
							"enum": "1",
							"description": "EXPLICIT_LIST_PROVIDED"
						}
					],
					"number": "857",
					"name": "AllocNoOrdersType",
					"type": "INT"
				},
				{
					"number": "858",
					"name": "SharedCommission",
					"type": "AMT"
				},
				{
					"number": "859",
					"name": "ConfirmReqID",
					"type": "STRING"
				},
				{
					"number": "860",
					"name": "AvgParPx",
					"type": "PRICE"
				},
				{
					"number": "861",
					"name": "ReportedPx",
					"type": "PRICE"
				},
				{
					"number": "862",
					"name": "NoCapacities",
					"type": "NUMINGROUP"
				},
				{
					"number": "863",
					"name": "OrderCapacityQty",
					"type": "QTY"
				},
				{
					"number": "864",
					"name": "NoEvents",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "PUT"
						},
						{
							"enum": "2",
							"description": "CALL"
						},
						{
							"enum": "3",
							"description": "TENDER"
						},
						{
							"enum": "4",
							"description": "SINKING_FUND_CALL"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "865",
					"name": "EventType",
					"type": "INT"
				},
				{
					"number": "866",
					"name": "EventDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "867",
					"name": "EventPx",
					"type": "PRICE"
				},
				{
					"number": "868",
					"name": "EventText",
					"type": "STRING"
				},
				{
					"number": "869",
					"name": "PctAtRisk",
					"type": "PERCENTAGE"
				},
				{
					"number": "870",
					"name": "NoInstrAttrib",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "FLAT"
						},
						{
							"enum": "2",
							"description": "ZERO_COUPON"
						},
						{
							"enum": "3",
							"description": "INTEREST_BEARING"
						},
						{
							"enum": "4",
							"description": "NO_PERIODIC_PAYMENTS"
						},
						{
							"enum": "5",
							"description": "VARIABLE_RATE"
						},
						{
							"enum": "6",
							"description": "LESS_FEE_FOR_PUT"
						},
						{
							"enum": "7",
							"description": "STEPPED_COUPON"
						},
						{
							"enum": "8",
							"description": "COUPON_PERIOD"
						},
						{
							"enum": "9",
							"description": "WHEN_AND_IF_ISSUED"
						},
						{
							"enum": "10",
							"description": "ORIGINAL_ISSUE_DISCOUNT"
						},
						{
							"enum": "11",
							"description": "CALLABLE_PUTTABLE"
						},
						{
							"enum": "12",
							"description": "ESCROWED_TO_MATURITY"
						},
						{
							"enum": "13",
							"description": "ESCROWED_TO_REDEMPTION_DATE_CALLABLE_SUPPLY_REDEMPTION_DATE_IN_THE_INSTRATTRIBVALUE"
						},
						{
							"enum": "14",
							"description": "PREREFUNDED"
						},
						{
							"enum": "15",
							"description": "IN_DEFAULT"
						},
						{
							"enum": "16",
							"description": "UNRATED"
						},
						{
							"enum": "17",
							"description": "TAXABLE"
						},
						{
							"enum": "18",
							"description": "INDEXED"
						},
						{
							"enum": "19",
							"description": "SUBJECT_TO_ALTERNATIVE_MINIMUM_TAX"
						},
						{
							"enum": "20",
							"description": "ORIGINAL_ISSUE_DISCOUNT_PRICE_SUPPLY_PRICE_IN_THE_INSTRATTRIBVALUE"
						},
						{
							"enum": "21",
							"description": "CALLABLE_BELOW_MATURITY_VALUE"
						},
						{
							"enum": "22",
							"description": "CALLABLE_WITHOUT_NOTICE_BY_MAIL_TO_HOLDER_UNLESS_REGISTERED"
						},
						{
							"enum": "99",
							"description": "TEXT_SUPPLY_THE_TEXT_OF_THE_ATTRIBUTE_OR_DISCLAIMER_IN_THE_INSTRATTRIBVALUE"
						}
					],
					"number": "871",
					"name": "InstrAttribType",
					"type": "INT"
				},
				{
					"number": "872",
					"name": "InstrAttribValue",
					"type": "STRING"
				},
				{
					"number": "873",
					"name": "DatedDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "874",
					"name": "InterestAccrualDate",
					"type": "LOCALMKTDATE"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "3"
						},
						{
							"enum": "2",
							"description": "4"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "875",
					"name": "CPProgram",
					"type": "INT"
				},
				{
					"number": "876",
					"name": "CPRegType",
					"type": "STRING"
				},
				{
					"number": "877",
					"name": "UnderlyingCPProgram",
					"type": "STRING"
				},
				{
					"number": "878",
					"name": "UnderlyingCPRegType",
					"type": "STRING"
				},
				{
					"number": "879",
					"name": "UnderlyingQty",
					"type": "QTY"
				},
				{
					"number": "880",
					"name": "TrdMatchID",
					"type": "STRING"
				},
				{
					"number": "881",
					"name": "SecondaryTradeReportRefID",
					"type": "STRING"
				},
				{
					"number": "882",
					"name": "UnderlyingDirtyPrice",
					"type": "PRICE"
				},
				{
					"number": "883",
					"name": "UnderlyingEndPrice",
					"type": "PRICE"
				},
				{
					"number": "884",
					"name": "UnderlyingStartValue",
					"type": "AMT"
				},
				{
					"number": "885",
					"name": "UnderlyingCurrentValue",
					"type": "AMT"
				},
				{
					"number": "886",
					"name": "UnderlyingEndValue",
					"type": "AMT"
				},
				{
					"number": "887",
					"name": "NoUnderlyingStips",
					"type": "NUMINGROUP"
				},
				{
					"number": "888",
					"name": "UnderlyingStipType",
					"type": "STRING"
				},
				{
					"number": "889",
					"name": "UnderlyingStipValue",
					"type": "STRING"
				},
				{
					"number": "890",
					"name": "MaturityNetMoney",
					"type": "AMT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "ABSOLUTE"
						},
						{
							"enum": "1",
							"description": "PER_UNIT"
						},
						{
							"enum": "2",
							"description": "PERCENTAGE"
						}
					],
					"number": "891",
					"name": "MiscFeeBasis",
					"type": "INT"
				},
				{
					"number": "892",
					"name": "TotNoAllocs",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "Y",
							"description": "YES"
						},
						{
							"enum": "N",
							"description": "NO"
						}
					],
					"number": "893",
					"name": "LastFragment",
					"type": "BOOLEAN"
				},
				{
					"number": "894",
					"name": "CollReqID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "INITIAL"
						},
						{
							"enum": "1",
							"description": "SCHEDULED"
						},
						{
							"enum": "2",
							"description": "TIME_WARNING"
						},
						{
							"enum": "3",
							"description": "MARGIN_DEFICIENCY"
						},
						{
							"enum": "4",
							"description": "MARGIN_EXCESS"
						},
						{
							"enum": "5",
							"description": "FORWARD_COLLATERAL_DEMAND"
						},
						{
							"enum": "6",
							"description": "EVENT_OF_DEFAULT"
						},
						{
							"enum": "7",
							"description": "ADVERSE_TAX_EVENT"
						}
					],
					"number": "895",
					"name": "CollAsgnReason",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "TRADEDATE"
						},
						{
							"enum": "1",
							"description": "GC_INSTRUMENT"
						},
						{
							"enum": "2",
							"description": "COLLATERALINSTRUMENT"
						},
						{
							"enum": "3",
							"description": "SUBSTITUTION_ELIGIBLE"
						},
						{
							"enum": "4",
							"description": "NOT_ASSIGNED"
						},
						{
							"enum": "5",
							"description": "PARTIALLY_ASSIGNED"
						},
						{
							"enum": "6",
							"description": "FULLY_ASSIGNED"
						},
						{
							"enum": "7",
							"description": "OUTSTANDING_TRADES"
						}
					],
					"number": "896",
					"name": "CollInquiryQualifier",
					"type": "INT"
				},
				{
					"number": "897",
					"name": "NoTrades",
					"type": "NUMINGROUP"
				},
				{
					"number": "898",
					"name": "MarginRatio",
					"type": "PERCENTAGE"
				},
				{
					"number": "899",
					"name": "MarginExcess",
					"type": "AMT"
				},
				{
					"number": "900",
					"name": "TotalNetValue",
					"type": "AMT"
				},
				{
					"number": "901",
					"name": "CashOutstanding",
					"type": "AMT"
				},
				{
					"number": "902",
					"name": "CollAsgnID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "NEW"
						},
						{
							"enum": "1",
							"description": "REPLACE"
						},
						{
							"enum": "2",
							"description": "CANCEL"
						},
						{
							"enum": "3",
							"description": "RELEASE"
						},
						{
							"enum": "4",
							"description": "REVERSE"
						}
					],
					"number": "903",
					"name": "CollAsgnTransType",
					"type": "INT"
				},
				{
					"number": "904",
					"name": "CollRespID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "RECEIVED"
						},
						{
							"enum": "1",
							"description": "ACCEPTED"
						},
						{
							"enum": "2",
							"description": "DECLINED"
						},
						{
							"enum": "3",
							"description": "REJECTED"
						}
					],
					"number": "905",
					"name": "CollAsgnRespType",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "UNKNOWN_DEAL"
						},
						{
							"enum": "1",
							"description": "UNKNOWN_OR_INVALID_INSTRUMENT"
						},
						{
							"enum": "2",
							"description": "UNAUTHORIZED_TRANSACTION"
						},
						{
							"enum": "3",
							"description": "INSUFFICIENT_COLLATERAL"
						},
						{
							"enum": "4",
							"description": "INVALID_TYPE_OF_COLLATERAL"
						},
						{
							"enum": "5",
							"description": "EXCESSIVE_SUBSTITUTION"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "906",
					"name": "CollAsgnRejectReason",
					"type": "INT"
				},
				{
					"number": "907",
					"name": "CollAsgnRefID",
					"type": "STRING"
				},
				{
					"number": "908",
					"name": "CollRptID",
					"type": "STRING"
				},
				{
					"number": "909",
					"name": "CollInquiryID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "UNASSIGNED"
						},
						{
							"enum": "1",
							"description": "PARTIALLY_ASSIGNED"
						},
						{
							"enum": "2",
							"description": "ASSIGNMENT_PROPOSED"
						},
						{
							"enum": "3",
							"description": "ASSIGNED"
						},
						{
							"enum": "4",
							"description": "CHALLENGED"
						}
					],
					"number": "910",
					"name": "CollStatus",
					"type": "INT"
				},
				{
					"number": "911",
					"name": "TotNumReports",
					"type": "INT"
				},
				{
					"number": "912",
					"name": "LastRptRequested",
					"type": "BOOLEAN"
				},
				{
					"number": "913",
					"name": "AgreementDesc",
					"type": "STRING"
				},
				{
					"number": "914",
					"name": "AgreementID",
					"type": "STRING"
				},
				{
					"number": "915",
					"name": "AgreementDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "916",
					"name": "StartDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "917",
					"name": "EndDate",
					"type": "LOCALMKTDATE"
				},
				{
					"number": "918",
					"name": "AgreementCurrency",
					"type": "CURRENCY"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "VERSUS_PAYMENT_DELIVER"
						},
						{
							"enum": "1",
							"description": "FREE_DELIVER"
						},
						{
							"enum": "2",
							"description": "TRI_PARTY"
						},
						{
							"enum": "3",
							"description": "HOLD_IN_CUSTODY"
						}
					],
					"number": "919",
					"name": "DeliveryType",
					"type": "INT"
				},
				{
					"number": "920",
					"name": "EndAccruedInterestAmt",
					"type": "AMT"
				},
				{
					"number": "921",
					"name": "StartCash",
					"type": "AMT"
				},
				{
					"number": "922",
					"name": "EndCash",
					"type": "AMT"
				},
				{
					"number": "923",
					"name": "UserRequestID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "LOGONUSER"
						},
						{
							"enum": "2",
							"description": "LOGOFFUSER"
						},
						{
							"enum": "3",
							"description": "CHANGEPASSWORDFORUSER"
						},
						{
							"enum": "4",
							"description": "REQUEST_INDIVIDUAL_USER_STATUS"
						}
					],
					"number": "924",
					"name": "UserRequestType",
					"type": "INT"
				},
				{
					"number": "925",
					"name": "NewPassword",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "LOGGED_IN"
						},
						{
							"enum": "2",
							"description": "NOT_LOGGED_IN"
						},
						{
							"enum": "3",
							"description": "USER_NOT_RECOGNISED"
						},
						{
							"enum": "4",
							"description": "PASSWORD_INCORRECT"
						},
						{
							"enum": "5",
							"description": "PASSWORD_CHANGED"
						},
						{
							"enum": "6",
							"description": "OTHER"
						}
					],
					"number": "926",
					"name": "UserStatus",
					"type": "INT"
				},
				{
					"number": "927",
					"name": "UserStatusText",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "CONNECTED"
						},
						{
							"enum": "2",
							"description": "NOT_CONNECTED_DOWN_EXPECTED_UP"
						},
						{
							"enum": "3",
							"description": "NOT_CONNECTED_DOWN_EXPECTED_DOWN"
						},
						{
							"enum": "4",
							"description": "IN_PROCESS"
						}
					],
					"number": "928",
					"name": "StatusValue",
					"type": "INT"
				},
				{
					"number": "929",
					"name": "StatusText",
					"type": "STRING"
				},
				{
					"number": "930",
					"name": "RefCompID",
					"type": "STRING"
				},
				{
					"number": "931",
					"name": "RefSubID",
					"type": "STRING"
				},
				{
					"number": "932",
					"name": "NetworkResponseID",
					"type": "STRING"
				},
				{
					"number": "933",
					"name": "NetworkRequestID",
					"type": "STRING"
				},
				{
					"number": "934",
					"name": "LastNetworkResponseID",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "SNAPSHOT"
						},
						{
							"enum": "2",
							"description": "SUBSCRIBE"
						},
						{
							"enum": "4",
							"description": "STOP_SUBSCRIBING"
						},
						{
							"enum": "8",
							"description": "LEVEL_OF_DETAIL_THEN_NOCOMPIDS_BECOMES_REQUIRED"
						}
					],
					"number": "935",
					"name": "NetworkRequestType",
					"type": "INT"
				},
				{
					"number": "936",
					"name": "NoCompIDs",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "FULL"
						},
						{
							"enum": "2",
							"description": "INCREMENTAL_UPDATE"
						}
					],
					"number": "937",
					"name": "NetworkStatusResponseType",
					"type": "INT"
				},
				{
					"number": "938",
					"name": "NoCollInquiryQualifier",
					"type": "NUMINGROUP"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "ACCEPTED"
						},
						{
							"enum": "1",
							"description": "REJECTED"
						}
					],
					"number": "939",
					"name": "TrdRptStatus",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "1",
							"description": "RECEIVED"
						},
						{
							"enum": "2",
							"description": "CONFIRM_REJECTED_IE_NOT_AFFIRMED"
						},
						{
							"enum": "3",
							"description": "AFFIRMED"
						}
					],
					"number": "940",
					"name": "AffirmStatus",
					"type": "INT"
				},
				{
					"number": "941",
					"name": "UnderlyingStrikeCurrency",
					"type": "CURRENCY"
				},
				{
					"number": "942",
					"name": "LegStrikeCurrency",
					"type": "CURRENCY"
				},
				{
					"number": "943",
					"name": "TimeBracket",
					"type": "STRING"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "RETAIN"
						},
						{
							"enum": "1",
							"description": "ADD"
						},
						{
							"enum": "2",
							"description": "REMOVE"
						}
					],
					"number": "944",
					"name": "CollAction",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "ACCEPTED"
						},
						{
							"enum": "1",
							"description": "ACCEPTED_WITH_WARNINGS"
						},
						{
							"enum": "2",
							"description": "COMPLETED"
						},
						{
							"enum": "3",
							"description": "COMPLETED_WITH_WARNINGS"
						},
						{
							"enum": "4",
							"description": "REJECTED"
						}
					],
					"number": "945",
					"name": "CollInquiryStatus",
					"type": "INT"
				},
				{
					"value": [
						{
							"enum": "0",
							"description": "SUCCESSFUL"
						},
						{
							"enum": "1",
							"description": "INVALID_OR_UNKNOWN_INSTRUMENT"
						},
						{
							"enum": "2",
							"description": "INVALID_OR_UNKNOWN_COLLATERAL_TYPE"
						},
						{
							"enum": "3",
							"description": "INVALID_PARTIES"
						},
						{
							"enum": "4",
							"description": "INVALID_TRANSPORT_TYPE_REQUESTED"
						},
						{
							"enum": "5",
							"description": "INVALID_DESTINATION_REQUESTED"
						},
						{
							"enum": "6",
							"description": "NO_COLLATERAL_FOUND_FOR_THE_TRADE_SPECIFIED"
						},
						{
							"enum": "7",
							"description": "NO_COLLATERAL_FOUND_FOR_THE_ORDER_SPECIFIED"
						},
						{
							"enum": "8",
							"description": "COLLATERAL_INQUIRY_TYPE_NOT_SUPPORTED"
						},
						{
							"enum": "9",
							"description": "UNAUTHORIZED_FOR_COLLATERAL_INQUIRY"
						},
						{
							"enum": "99",
							"description": "OTHER"
						}
					],
					"number": "946",
					"name": "CollInquiryResult",
					"type": "INT"
				},
				{
					"number": "947",
					"name": "StrikeCurrency",
					"type": "CURRENCY"
				},
				{
					"number": "948",
					"name": "NoNested3PartyIDs",
					"type": "NUMINGROUP"
				},
				{
					"number": "949",
					"name": "Nested3PartyID",
					"type": "STRING"
				},
				{
					"number": "950",
					"name": "Nested3PartyIDSource",
					"type": "CHAR"
				},
				{
					"number": "951",
					"name": "Nested3PartyRole",
					"type": "INT"
				},
				{
					"number": "952",
					"name": "NoNested3PartySubIDs",
					"type": "NUMINGROUP"
				},
				{
					"number": "953",
					"name": "Nested3PartySubID",
					"type": "STRING"
				},
				{
					"number": "954",
					"name": "Nested3PartySubIDType",
					"type": "INT"
				},
				{
					"number": "955",
					"name": "LegContractSettlMonth",
					"type": "MONTHYEAR"
				},
				{
					"number": "956",
					"name": "LegInterestAccrualDate",
					"type": "LOCALMKTDATE"
				}
			]
		}
	};
