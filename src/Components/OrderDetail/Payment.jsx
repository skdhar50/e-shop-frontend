import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usePaymentInit } from "Hooks/usePayment";

function Payment() {
	const [sessionSuccess, setSessionSuccess] = useState(false);
	const [failed, setFailed] = useState(false);
	const [redirectUrl, setRedirectUrl] = useState("");
	const { id } = useParams();

	const {
		data: sesstionData,
		isSuccess,
		isLoading,
		refetch,
	} = usePaymentInit(id);

	useEffect(() => {
		refetch();
	}, []);

	if (isSuccess) {
		if (sesstionData?.data.status === "SUCCESS") {
			setSessionSuccess(true);
			setFailed(false);
			setRedirectUrl(sesstionData?.data.GatewayPageURL);
		} else if (sesstionData.status === "FAILED") {
			setSessionSuccess(false);
			setFailed(true);
			setRedirectUrl("");
		}
	}

	if (isLoading) {
		return <div className="">Loading...</div>;
	}

	return (
		<div>
			{sessionSuccess
				? (window.location = redirectUrl)
				: "Payment is processing..."}
			{failed ? (
				<>
					<p className="">Failed to start payment session...</p>
					<Link to="/cart">Go to Cart</Link>
				</>
			) : (
				""
			)}
		</div>
	);
}

export default Payment;
