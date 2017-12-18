package ro.mve.immobilis;

public class SimException extends RuntimeException {
	private static final long serialVersionUID = -8409782935776307646L;

	private SimExceptionInfo simExceptionType;

	public SimException() {
		
	}
	public SimException(SimExceptionInfo simExceptionType) {
		super(simExceptionType.getKey());
		this.simExceptionType = simExceptionType;
	}

	@Override
	public String getLocalizedMessage() {
		if (simExceptionType != null) {
			return simExceptionType.toString();
		}
		return super.getLocalizedMessage();
	}

	public SimExceptionInfo getSimExceptionType() {
		return simExceptionType;
	}

	public void setSimExceptionType(SimExceptionInfo simExceptionType) {
		this.simExceptionType = simExceptionType;
	}

}
